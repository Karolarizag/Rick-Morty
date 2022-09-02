import { gql } from '@apollo/client'

export const CHARACTERS = gql`{
  characters {
    results {
      id
      name
      status
      species
      image
      location {
        name
        id
      }
      gender
      origin {
        name
        id
      }
      type
      episode {
        name
        id
      } 
    }
  }
}
`