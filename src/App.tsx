import React from 'react';
import logo from './logo.svg';
import { gql } from '@apollo/client'
import './App.css';

const CHARACTERS = gql`{
  characters {
    results {
      id
      name
      status
      species
      image
      location {
        name
        id
      }
      gender
      origin {
        name
        id
      }
      type
      episode {
        name
        id
      } 
    }
  }
}
`

function App() {

  console.log(CHARACTERS, '-------')

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
