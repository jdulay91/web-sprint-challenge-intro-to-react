// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import Button from './Button'
import Image from './Image'



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
    const{character,setIdRandomizer} = props;

    return (
        <CharacterStyled>
            <div className="flexContainer">
                <Image image={character.image} alt={character.species}/>                
                <div>
                    <Text character={character}/>
                    <Button random={setIdRandomizer}/>
                </div>
            </div>            
        </CharacterStyled>
    )
}
