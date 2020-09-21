import React from 'react'
import styled from 'styled-components'


export default function Text(props){
    const{character} = props;

    return (
        <div>
            <h2>Name: {character.name}</h2>
            <h2>Species:{character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Status:{character.status}</h2>
        </div>

    )
}