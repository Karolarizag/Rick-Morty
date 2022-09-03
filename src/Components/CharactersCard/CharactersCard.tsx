import { Link } from "react-router-dom"

export const Card = ({props}:any) => {

  return (
    <div className="card w-80 bg-secondary shadow-xl m-3 mx-2">
        <figure><img src={props.image} alt={props.name} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {props.name}
          </h2>
          <div className="flex justify-start flex-wrap">

            <div className="badge badge-accent m-1">{props.status}</div>
            <div className="badge badge-primary m-1">{props.gender}</div> 
            <div className="badge badge-primary m-1">{props.species}</div>
            {props.type
              ? <div className="badge badge-primary m-1">{props.type}</div>
              : null
            }
          </div>
          <p>{props.location.name}</p>
          <div className="card-actions justify-end">
            <Link to={`/characters/${props.id}`}>
              <button className="btn btn-ghost">See details</button>
            </Link>
          </div>
        </div>
      </div>
  )

}