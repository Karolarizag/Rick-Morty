import React from 'react';
import { CHARACTERS } from './Services/Characters'
import { useQuery } from '@apollo/client';
import './App.css';
import { Character } from './types';
import { Card } from './Components/Card/Card';

function App() {

  const characters = useQuery(CHARACTERS).data?.characters?.results

  return (
    <div className="bg-default">

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

    </div>
  );
}

export default App;
