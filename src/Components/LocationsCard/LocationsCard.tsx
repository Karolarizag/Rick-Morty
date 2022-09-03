export const LocationsCard = ({props}:any) => {

  return (
    
    <div className="card w-96 bg-secondary shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.type}, {props.dimension}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary">{props.residents.length} residents</div>
        </div>
      </div>
    </div>
  )

}