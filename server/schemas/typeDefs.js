const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    parlays: [Parlay]!
  }

  type Parlay {
    _id: ID
    home_team: String
    away_team: String
    price: Int
    point: Int
    commence_time: String
  }

  type Game {
    _id: ID
    home_team: String
    away_team: String
    commence_time: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    parlays(username: String): [Parlay]
    parlay(parlayId: ID!): Parlay
    games: [Game]
    game(gameId: ID!): Game
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addParlay(home_team: String!, away_team: String!, price: Int!, point: Int!): Parlay
    removeParlay(parlayId: ID!): Parlay
  }
`;

module.exports = typeDefs;