import { CHARACTERS } from '../Services/Characters'
import { useQuery } from '@apollo/client';
import { Character } from '../types';
import { Card } from '../Components/Card/Card';
import { Loading } from '../Components/Loading/Loading';

export const Characters = () => {
  const characters = useQuery(CHARACTERS).data?.characters?.results
  const isLoading = useQuery(CHARACTERS).loading

  return (
    <div>
      {
        isLoading
        ? <Loading />
        : 
        <div className="flex flex-wrap justify-around">
          {
            characters?.map((item:Character) => {
              return (
                <div>
                  <Card props={item} key={item.id} />
                </div>
              )
            })
          }
        </div>
      }

    </div>
  )
}