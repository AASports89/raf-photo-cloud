import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PICTURE = gql`
  mutation addPicture($title: String!, $image: String!, $comment: String!) {
    addPicture(title: $title, image: $image, comment:$comment) {
      _id
      title
      image
      comment
      post_time
    }
  }
`

export const ADD_COMMENT = gql`
  mutation addComment($comment: String!) {
    addComment(comment: $comment) {
      _id
      comment
      post_time
    }
  }
`;