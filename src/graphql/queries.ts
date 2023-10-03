import { gql } from "../__generated__";

export const GET_ROCKETS = gql(`
  query GetRockets {
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
`);
