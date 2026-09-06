import prisma from '../prisma/client.js';
import { randomBytes } from 'crypto';
import { sendTokenToUser } from '../discord/bot.js';

function generateSecureToken(length: number = 120): string {
  return randomBytes(length).toString('hex').slice(0, length);
}

function getClientIp(context: any): string {
  return context.ipAddress || context.request?.ip || 'unknown';
}

export const resolvers = {
  Query: {
    projects: async () => {
      return await prisma.project.findMany({
        orderBy: { createdAt: 'desc' },
      });
    },
    project: async (_: unknown, { id }: { id: string }) => {
      return await prisma.project.findUnique({ where: { id } });
    },
    projectsByCategory: async (
      _: unknown,
      { categoria }: { categoria: string }
    ) => {
      return await prisma.project.findMany({
        where: { categoria },
        orderBy: { destacado: 'desc' },
      });
    },
    validateToken: async (
      _: unknown,
      { token, ipAddress }: { token: string; ipAddress: string }
    ) => {
      const uploadToken = await prisma.uploadToken.findUnique({
        where: { token },
      });

      if (!uploadToken) return false;
      if (uploadToken.used) return false;
      if (uploadToken.expiresAt < new Date()) return false;
      if (uploadToken.ipAddress !== ipAddress) return false;

      return true;
    },
    me: async (_: unknown, { discordId }: { discordId: string }) => {
      return await prisma.user.findUnique({
        where: { discordId },
      });
    },
  },

  Mutation: {
    generateUploadToken: async (
      _: unknown,
      { discordId, ipAddress }: { discordId: string; ipAddress: string }
    ) => {
      const token = generateSecureToken(120);
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

      const uploadToken = await prisma.uploadToken.create({
        data: {
          token,
          discordId,
          ipAddress,
          expiresAt,
        },
      });

      const sent = await sendTokenToUser(discordId, token);

      if (!sent) {
        console.warn('Failed to send token to Discord, but token was created');
      }

      return uploadToken;
    },

    createProject: async (
      _: unknown,
      { input, token }: { input: any; token: string }
    ) => {
      const uploadToken = await prisma.uploadToken.findUnique({
        where: { token },
      });

      if (!uploadToken || uploadToken.used || uploadToken.expiresAt < new Date()) {
        throw new Error('Token invalido o expirado');
      }

      const project = await prisma.project.create({
        data: {
          ...input,
          destacado: input.destacado ?? false,
          categoria: input.categoria ?? 'personal',
        },
      });

      await prisma.uploadToken.update({
        where: { id: uploadToken.id },
        data: { used: true },
      });

      return project;
    },

    updateProject: async (
      _: unknown,
      { id, input }: { id: string; input: any }
    ) => {
      return await prisma.project.update({
        where: { id },
        data: input,
      });
    },

    deleteProject: async (_: unknown, { id }: { id: string }) => {
      await prisma.project.delete({ where: { id } });
      return true;
    },
  },
};