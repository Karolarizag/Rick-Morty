import { Link } from "react-router-dom"

export const Navbar = () => {

  return (
    <div className="navbar sticky -top-1 glass z-10">
      <div className="flex-1">
        <Link to="/">
          <div className="btn btn-ghost normal-case text-xl">Rick & Morty</div>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/madewith">Made with</Link>
          </li>
        </ul>
      </div>
    </div>
  )

}