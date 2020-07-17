// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const CharacterStyled = styled.div`
    width:100%;
    height: 50vh;
    text-align:justify;

    

    .flexContainer{
        display:flex;
        align-items:center;
        justify-content:center;
    }

    button{
        background-color: #555555;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

`

export default function Character (props){
    const{character} = props;

    return (
        <CharacterStyled>
            <div className="flexContainer">
                <img src={character.image} alt={character.species}/>
                <div>
                    <h2>Name: {character.name}</h2>
                    <h2>Species:{character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Status:{character.status}</h2>
                    <button>Click for Random Chara</button>
                </div>
            </div>            
        </CharacterStyled>
    )

}