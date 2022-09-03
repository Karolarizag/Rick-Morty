import { Navbar } from "../Components/Navbar/Navbar"
import { Title } from "../Components/Title/Title"
import { useQuery } from "@apollo/client"
import { LOCATIONS } from '../Services/Locations'
import { Loading } from "../Components/Loading/Loading"
import { Location } from '../types'
import { LocationsCard } from "../Components/LocationsCard/LocationsCard"

export const Locations = () => {

  const locations = useQuery(LOCATIONS).data?.locations?.results
  const isLoading = useQuery(LOCATIONS).loading

  return (
    <div>

    <Navbar />
    <Title props={'Locations'} />

    {
      isLoading
      ? <Loading />
      : 
      <div className="flex flex-wrap justify-around">
        {
          locations?.map((item:Location) => {
            return (
              <div key={item.id}>
                <LocationsCard props={item} />
              </div>
            )
          })
        }
      </div>
    }

    </div>
  )
}