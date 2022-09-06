import React from 'react';
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Characters } from './Pages/Characters';
import { Locations } from './Pages/Locations';
import { MadeWith } from './Pages/MadeWith';
import { Loading } from './Components/Loading/Loading';

function App() {


  return (
    <div className="bg-default">

      <Routes>
        <Route index element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/madewith' element={<MadeWith />} />
        <Route path='/loading' element={<Loading />} />
      </Routes>

    </div>
  );
}

export default App;
