import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { Loading } from "../Components/Loading/Loading"
import { Navbar } from "../Components/Navbar/Navbar"
import { Title } from "../Components/Title/Title"
import { Episode } from "../types"


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
  `
  const character = useQuery(CHARACTER).data?.character
  const isLoading = useQuery(CHARACTER).loading

    console.log(character)

  return (
    <div>

      <Navbar />

      {
        isLoading
        ? <Loading />
        : 
        <div>
          <Title props={character.name} />

          <div className="flex flex-wrap justify-center my-10">
            <img className="rounded-lg mx-5" src={character.image} alt={character.name} />
            <div>

              {
                character.gender === 'Male'
                ? <div className="badge badge-secondary">{character.gender}</div>
                : <div className="badge badge-primary">{character.gender}</div>
              }
              
              {
                character.status === 'Alive'
                ? <div className="badge badge-primary">{character.status}</div>
                : <div className="badge badge-secondary">{character.status}</div>
              }
              
            </div>
            
            
            {/* <table className="table ">
              <thead>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Gender</td>
                  <td>{character.gender}</td>
                </tr>

                <tr className="active">
                  <td>Location</td>
                  <td>{character.location.name}</td>
                </tr>

                <tr>
                  <td>Origin</td>
                  <td>{character.origin.name}</td>
                </tr>
                
                <tr>
                  <td>Type</td>
                  <td>{character.type}</td>
                </tr>
                
                <tr>
                  <td>Species</td>
                  <td>{character.species}</td>
                </tr>
                
              </tbody>
            </table> */}
          </div>
        
        </div>


      }
    </div>
  )

}