import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { Loading } from "../Components/Loading/Loading"


export const CharacterDetail = () => {
  const URLparams = useParams()
  
  const CHARACTER = gql`
    query {
      character(id: "${URLparams.id}") {
        name
        status
        species
        image
        location {
        id
        }
        gender
        origin {
        id
        }
        type
        episode {
          id
        }
      }
    }
  `
  const character = useQuery(CHARACTER).data?.character
  const isLoading = useQuery(CHARACTER).loading


  return (
    <div>
      {
        isLoading
        ? <Loading />
        : 
        <div>
          {character.name}
        </div>

      }
    </div>
  )

}