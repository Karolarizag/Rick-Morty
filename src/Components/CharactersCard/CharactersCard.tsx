import { Link } from "react-router-dom"
import './CharactersCard.css'

export const Card = ({props}:any) => {

  return (
    <Link to={`/characters/${props.id}`}>
      <div className="card m-3 mx-2 image-full">
        <figure><img src={props.image} alt={props.name} /></figure>
        <div className="p-5 flex justify-center items-end">
          <h2 className="card-title glass px-2 rounded">
            {props.name}
          </h2>
        </div>
      </div>
    </Link>
  )

}