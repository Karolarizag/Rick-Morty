import { Navbar } from "../Components/Navbar/Navbar"
import { Title } from "../Components/Title/Title"
import { Techonlogy } from "../types"

export const MadeWith = () => {

  const technologies = [
    {
      image: 'https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1546529981/project-covers/000/458/388/458388-original.jpg?1546529981',
      name: 'The Rick and Morty API',
      link: 'https://rickandmortyapi.com/'
    }, 
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png',
      name: 'React', 
      link: 'https://es.reactjs.org/'
    }, 
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
      name: 'DaisyUI library base in Tailwind', 
      link: 'https://daisyui.com/'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png',
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/'
    }
  ]

  return (
    <div>
      <Navbar />
      <Title props='Made with'/>
      
      <div className="flex flex-wrap">
        {

          technologies.map((techonology:Techonlogy) => {
            return (
              <div className="card lg:card-side bg-base-100 shadow-xl m-2 w-96">
                <div className="w-3/6">
                  <img src={techonology.image} alt={techonology.name} />
                </div>
                <div className="card-body">
                  <p>Tool:</p>
                  <h2 className="card-title">{techonology.name}</h2>
                </div>
            </div>
            )
          })
        }
      </div>

    </div>
  )
}