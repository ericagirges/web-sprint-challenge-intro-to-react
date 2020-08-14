import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Write your Character component here

const CharactersContainer = styled.div `
    display: inline-grid;
    margin: 20px 20px;
    
    img {
        width: 150px;
        height: auto;
        align-self: center;
        padding: 30px;
    }

`

const CharacterDiv = styled.div `
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 300px;
height: 500px;
background: white;
color: black;
font-family: "Inconsolata";
border-radius: 10px;
box-shadow: 5px 10px  10px black;
`

const Character = props => {
    const {info} = props

    console.log("info", info)

    return (
        <CharactersContainer>
            <CharacterDiv>
            <img src={info.image} alt="character"/>
            <h2>Name: {info.name}</h2>
            <p>Species: {info.species}</p>
            <p>Status: {info.status}</p>
            <p>Last known location: {info.location.name}</p>
            </CharacterDiv>
        </CharactersContainer>
    )


}

export default Character