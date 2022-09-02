import React from 'react';
import { CHARACTERS } from './Services/Characters'
import { useQuery } from '@apollo/client';
import './App.css';
import { Character } from './types';

function App() {

  const characters = useQuery(CHARACTERS).data?.characters

  console.log(characters)

  return (
    <div className="App">

    {
      characters?.results?.map((item:Character) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={item.image} alt={item.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title"> {item.name}</h2>
              <p>{item.status} - {item.species}</p>
              <p>{item.location.name}</p>
            </div>
          </div>
        )
      })
    }

    </div>
  );
}

export default App;
