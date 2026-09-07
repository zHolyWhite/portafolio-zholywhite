import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';

interface GraphQLContext {
  ipAddress: string;
}

export async function createServer() {
  const app = fastify({
    logger: true,
    trustProxy: '127.0.0.1',
  });

  await app.register(cors, {
    origin: [
    'http://localhost:4321',
    'http://127.0.0.1:4321',
    'https://zholywhite.me',
    'https://www.zholywhite.me',
    ],
    methods: ['POST', 'OPTIONS'],
  });

  const server = new ApolloServer<GraphQLContext>({
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

    const response = await server.executeOperation(
      {
        query: query || '',
        variables,
        operationName,
      },
      {
        contextValue: {
          ipAddress: req.ip,
        },
      },
    );

    return reply.send(response.body);
  });

  return app;
}