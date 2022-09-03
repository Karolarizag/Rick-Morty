import { gql } from "@apollo/client";

export const LOCATIONS = gql`
  { 
    locations {
      results {
        name
        id
        type
        dimension
        residents {
          id
          name
        } 
        
      }
    }
  }
`