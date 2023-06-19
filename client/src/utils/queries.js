import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      parlays {
        _id
        home_team
        away_team
        price
        point
        commence_time
      }
    }
  }
`;

export const QUERY_PARLAYS = gql`
  query getParlays {
    parlays {
      _id
      home_team
      away_team
      price
      point
      commence_time
    }
  }
`;

export const QUERY_GAMES = gql`
  query getGames {
    games {
      _id
      home_team
      away_team
      commence_time
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      parlays {
        _id
        home_team
        away_team
        price
        point
        commence_time
      }
    }
  }
`;