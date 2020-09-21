import React, { useState,useCallback,useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios';

const App = () => {

  const[characters,setCharacter] = useState([])
  const[idRandomizer,setIdRandomizer] = useState([1,2,3,4])
  const rickAndMortyApiBaseUrl = 'https://rickandmortyapi.com/api/character/'

  useEffect(()=>{
    axios
    .get(`${rickAndMortyApiBaseUrl}/${idRandomizer}`)
    .then(res=>{        
      setCharacter(res.data)            
       
    })
    .catch(err=>{
      console.log('Oh no you have encountered an ',err)
    })
  },[idRandomizer])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character=>{
        {return <Character key={character.id} character={character} setIdRandomizer={setIdRandomizer}/>}
      })}      
    </div>
  );
}

export default App;
