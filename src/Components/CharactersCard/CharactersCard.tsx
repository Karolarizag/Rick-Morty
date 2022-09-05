import { Character } from "../../types"
import './CharactersCard.css'

export const Card = ({props}:any) => {

  const status = (item:Character) => {
    if (item.status === 'Alive') {
      return (
        <div className="badge badge-primary">{item.status}</div>
      )
    } else if (item.status === 'Dead') {
      return (
        <div className="badge badge-secondary">{item.status}</div>
      ) 
    } else {
      return (
        <div className="badge badge-default">{item.status}</div>
      )
    }
  }

  return (
      <div className="card charactersCard bg-base-100 shadow-xl my-2">

        <figure><img src={props.image} alt={props.name} /></figure>

        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>
          {
            status(props) 
          }  -  {props.species}
          </p>

          <p>
            {
              props.gender === 'Male'
              ? <div className="badge badge-secondary">{props.gender}</div>
              : <div className="badge badge-primary">{props.gender}</div>
            } {  -  props.type ? props.type : null}
          </p>

          <p>Last known location: <br /> {props.location.name} </p>

          <p>First seen in: <br /> {props.origin.name} </p>

        </div>

      </div>
  )

}