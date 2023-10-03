import { gql } from "@apollo/client";

export const GET_ROCKETS = gql`
  query rocketQuery {
    rockets {
      company
      country
      description
      engines {
        number
        engine_loss_max
      }
    }
  }
`;
