import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';

export async function createServer() {
  const app = fastify({ 
    logger: true,
    trustProxy: true,
  });

  await app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.post('/graphql', async (req, reply) => {
    const { body } = req;
    const { query, variables, operationName } = body as {
      query?: string;
      variables?: Record<string, unknown>;
      operationName?: string;
    };

    const ipAddress = 
      (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
      (req.headers['x-real-ip'] as string) ||
      req.ip ||
      'unknown';

    const response = await server.executeOperation(
      {
        query: query || '',
        variables,
        operationName,
      },
      {
        request: req,
        ipAddress,
      }
    );

    return reply.send(response.body);
  });

  return app;
}