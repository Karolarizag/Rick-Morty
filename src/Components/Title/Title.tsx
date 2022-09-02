import './Title.css'

export const Title = ({props}:any) => {

  return (
    <div>
      <h1 className='title text-primary'>{props}</h1>
    </div>
  )

}