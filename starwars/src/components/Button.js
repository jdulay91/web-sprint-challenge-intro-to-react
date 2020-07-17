import React from 'react'
import styled from 'styled-components'


function randomArrayGenerator(){
    const array = []
    for(let i=0; i<4; i++){
        array.push(Math.floor(Math.random()*590))        
    }
    return array;    
}

export default function Button(props){
    const {random} = props

    return(
        <button onClick={(event)=>{random(randomArrayGenerator())}}>Click to Shuffle ALL Characters</button>
    )

}