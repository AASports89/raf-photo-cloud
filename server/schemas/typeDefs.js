const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    parlays: [Parlay]!
  }

  type Post {
    _id: ID
    title: String
    image: String
    comment: String
    dateFormat: String
  }

  type Comment {
    _id: ID
    image: String
    comment: String
    dateFormat: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    comments: [Comment]
    comment(commentId: ID!): Comment
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(title: String!, image: String!, comment: String!): Post
    removePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;