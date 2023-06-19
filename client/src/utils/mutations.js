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

export const ADD_PARLAY = gql`
  mutation addParlay($home_team: String!, $away_team: String!, $price: Int!, $point: Int!) {
    addParlay(home_team: $home_team, away_team: $away_team, price:$price, point:$poiint) {
      _id
      home_team
      away_team
      price
      point
      commence_time
    }
  }
`;