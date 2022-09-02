import { Link } from "react-router-dom"

export const Home = () => {

  return (


    <div className="hero min-h-screen banner">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="card glass p-5 max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Rick & Morty app</h1>
          <p className="mb-5 ">Find the characters and locations and get more information about this show!</p>
          <div className='flex justify-around'>
            <Link to='/characters'>
              <button className="btn btn-primary">Characters</button>
            </Link>
            <Link to='/locations'>
              <button className="btn btn-primary">Locations</button>
            </Link>
            <Link to='/madewith'>
              <button className="btn btn-primary">Made with</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )

}