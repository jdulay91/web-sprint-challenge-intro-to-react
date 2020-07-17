import React, { useState,useCallback,useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios';

const App = () => {

  const[characters,setCharacter] = useState([])
  const[idRandomizer,setIdRandomizer] = useState(0)
  const rickAndMortyApiBaseUrl = 'https://rickandmortyapi.com/api/character/'

  useEffect(()=>{
    axios
    .get(`${rickAndMortyApiBaseUrl}/7,2,3,4`)
    .then(res=>{        
      setCharacter(res.data)            
       
    })
    .catch(err=>{
      console.log('Oh no you have encountered an ',err)
    })
  },[])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character=>{
        {return <Character key={character.id} character={character}/>}
      })}      
    </div>
  );
}

export default App;
