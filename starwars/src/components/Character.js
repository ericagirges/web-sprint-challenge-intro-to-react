import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// Write your Character component here

const CharacterDiv = styled.div `
    display: flex;
    width: 300px;
    flex-direction: column;
    img {
        width: 200px;
        height: auto;
    }

`

const Character = props => {
    const {info} = props

    console.log("info", info)

    return (
        <CharacterDiv>
            <div>
            <img src={info.image} alt="character"/>
            <h2>Name: {info.name}</h2>
            <h4>Species: {info.species}</h4>
            <h4>Status: {info.status}</h4>
            <h4>Last known location: {info.location.name}</h4>
            </div>
        </CharacterDiv>
    )


}

export default Character