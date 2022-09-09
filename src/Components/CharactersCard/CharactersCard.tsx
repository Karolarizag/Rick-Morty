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

    <div className="flip-card card drop-shadow-xl">

      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.image} alt="Avatar" />
        </div>
        <div className="flip-card-back p-3">
          <h2 className="mb-5"><b> {props.name}</b></h2>
          <p className="mb-3">
            {
              status(props) 
            }  -  {props.species}
          </p>

          <p className="mb-3">
            {
              props.gender === 'Male'
              ? <div className="badge badge-secondary">{props.gender}</div>
              : <div className="badge badge-primary">{props.gender}</div>
            } {  -  props.type ? props.type : null}
          </p>

          <p className="mb-3">Last known location: <br /> {props.location.name} </p>

          <p className="mb-3">First seen in: <br /> {props.origin.name} </p>

          <div className=" badge badge-warning">Episodes: {props.episode.length + 1}</div> 
        </div>
      </div>
    </div>
  )

}