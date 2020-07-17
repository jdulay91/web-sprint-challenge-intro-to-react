import React from 'react'
import styled, { keyframes } from 'styled-components'

const keyFrames = keyframes`
    0%{border-radius:0%}
    20%{border-radius:10%}
    40%{border-radius:20%}
    60%{border-radius:30%}
    80%{border-radius:40%}
    100%{border-radius:50%}
`

const ImageStyled = styled.img`

    &:hover{
        animation:${keyFrames} 5s ease-in alternate;
        animation-iteration-count: infinite;
    }

`

export default function Image (props){
    const{image,species} = props;

    return(
        <ImageStyled src={image} alt={species}/>
    )
}