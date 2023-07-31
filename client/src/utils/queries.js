import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      pictures {
        _id
        title
        image
        comment
        post_time
      }
    }
  }
`;

export const QUERY_PICTURES = gql`
  query getPictures {
    pictures {
      _id
      title
      image
      comment
      post_time
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      comment
      post_time
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      pictures {
        _id
        title
        image
        comment
        post_time
      }
    }
  }
`;