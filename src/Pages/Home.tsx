import { Link } from "react-router-dom"

export const Home = () => {

  return (


    <div className="hero min-h-screen banner">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="card glass p-5 max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Rick & Morty app</h1>
          <div className='md-flex-1'>
            <Link to='/characters'>
              <button className="btn btn-primary m-1">Characters</button>
            </Link>
            <Link to='/locations'>
              <button className="btn btn-primary m-1">Locations</button>
            </Link>
            <Link to='/madewith'>
              <button className="btn btn-primary m-1">Made with</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )

}