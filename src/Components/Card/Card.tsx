export const Card = ({props}:any) => {

  return (
    <div className="card w-80 bg-secondary shadow-xl m-3 mx-2">
      <figure><img src={props.image} alt={props.name} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.name}
          <div className="badge badge-accent">{props.status}</div>
        </h2>
        <p>{props.location.name}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary">{props.gender}</div> 
          <div className="badge badge-primary">{props.species}</div>
          {props.type
            ? <div className="badge badge-primary">{props.type}</div>
            : null
          }
        </div>
      </div>
    </div>
  )

}