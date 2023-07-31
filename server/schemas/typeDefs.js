const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    pictures: [Picture]!
  }

  type Picture {
    _id: ID
    title: String
    image: String
    commentSchema: String
    post_time: String
  }

  type Comment {
    _id: ID
    content: String
    post_time: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    pictures(username: String): [Picture]
    picture(pictureId: ID!): Picture
    comments: [Comment]
    content(commentId: ID!): Comment
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPicture(title: String!, image: String!, commentSchema: String!): Picture
    removePicture(pictureId: ID!): Picture
    addComment(content: String!): Comment
    removeComment(commentId: ID!): Comment
  }
`;

module.exports = typeDefs;