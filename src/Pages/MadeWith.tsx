import { Navbar } from "../Components/Navbar/Navbar"
import { Title } from "../Components/Title/Title"
import { Techonlogy } from "../types"

export const MadeWith = () => {

  const technologies = [
    {
      id: 1,
      image: 'https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1546529981/project-covers/000/458/388/458388-original.jpg?1546529981',
      name: 'The Rick and Morty API',
      link: 'https://rickandmortyapi.com/'
    }, 
    {
      id: 2,
      image: 'http://softwareevolutivo.com.ec/wp-content/uploads/2022/06/React-JS-y-su-fantasia-React-tastico.png',
      name: 'React', 
      link: 'https://es.reactjs.org/'
    }, 
    {
      id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
      name: 'DaisyUI library base in Tailwind', 
      link: 'https://daisyui.com/'
    },
    {
      id: 4,
      image: 'https://iconape.com/wp-content/png_logo_vector/typescript.png',
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/'
    }
  ]

  const contact = [
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      name: 'GitHub', 
      link: 'https://github.com/Karolarizag'
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/512/61/61109.png',
      name: 'Linked In',
      link: 'https://www.linkedin.com/in/karolarizag/'
    }
  ]

  return (
    <div>
      <Navbar />
      <Title props='Made with'/>
      
      <div className="flex flex-wrap p-5 justify-center ">
        {

          technologies.map((technology:Techonlogy) => {
            return (
              <div className="card bg-base-100 shadow-xl m-3 w-64 pt-4" key={technology.id}>
                <div className=" mx-auto h-64">
                  <img src={technology.image} alt={technology.name} />
                </div>
                <div className="card-body">
                  <p>Tool:
                    <br />
                    
                    <a href={technology.link} rel="noreferrer" target="_blank">{technology.name}</a>
                      
                      
                  </p>
                </div>
            </div>
            )
          })
        }
      </div>

      <Title props='Contact me'/>
        <div className="flex flex-wrap p-5 justify-center mb-10">
        {

          contact.map((item:Techonlogy) => {
            return (
              <div className="w-10 mx-2" key={item.id}>
                <a href={item.link} rel="noreferrer" target="_blank">
                    <img src={item.image} alt={item.name} />
                </a>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}