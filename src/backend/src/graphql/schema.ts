export const typeDefs = `#graphql
  type Project {
    id: ID!
    titulo: String!
    descripcion: String!
    descripcionLarga: String
    stack: [String!]!
    github: String
    modrinth: String
    demo: String
    portada: String
    video: String
    destacado: Boolean!
    categoria: String!
    createdAt: String!
    updatedAt: String!
  }

  type UploadToken {
    id: ID!
    token: String!
    discordId: String!
    ipAddress: String!
    used: Boolean!
    expiresAt: String!
    createdAt: String!
  }

  type User {
    id: ID!
    discordId: String!
    username: String!
    avatarUrl: String
    lastIp: String
    createdAt: String!
    updatedAt: String!
  }

  input CreateProjectInput {
    titulo: String!
    descripcion: String!
    descripcionLarga: String
    stack: [String!]!
    github: String
    modrinth: String
    demo: String
    portada: String
    video: String
    destacado: Boolean
    categoria: String
  }

  type Query {
    projects: [Project!]!
    project(id: ID!): Project
    projectsByCategory(categoria: String!): [Project!]!
    validateToken(token: String!, ipAddress: String!): Boolean!
    me(discordId: String!): User
  }

  type Mutation {
    createProject(input: CreateProjectInput!, token: String!): Project!
    updateProject(id: ID!, input: CreateProjectInput!): Project!
    deleteProject(id: ID!): Boolean!
    generateUploadToken(discordId: String!, ipAddress: String!): UploadToken!
  }
`;