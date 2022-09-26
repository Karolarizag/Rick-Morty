import { CHARACTERS } from '../Services/Characters'
import { useQuery } from '@apollo/client';
import { Character } from '../types';
import { Card } from '../Components/CharactersCard/CharactersCard';
import { Loading } from '../Components/Loading/Loading';
import { Title } from '../Components/Title/Title';
import { Navbar } from '../Components/Navbar/Navbar';

export const Characters = () => {

  const characters = useQuery(CHARACTERS).data?.characters?.results
  const isLoading = useQuery(CHARACTERS).loading

  return (
    <div>

      <Navbar />
      <Title props={'Characters'} />

      {
        isLoading
        ? <Loading />
        : 
        <div className="flex flex-wrap justify-around">
          {
            characters?.map((item:Character) => {
              return (
                <div key={item.id}>
                  <Card props={item} />
                </div>
              )
            })
          }
        </div>
      }

    </div>
  )
}