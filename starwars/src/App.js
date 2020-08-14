import React, { useEffect, useState } from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios";
import styled from "styled-components";


const headerStyle = styled.h1 `
    font-family: "Londrina Solid";
    font-size: 3.0em;

 `

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterCards, setCharacterCards] = useState(null)


  useEffect(() => {
   axios.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
   .then((response) => {
     setCharacterCards(response.data);
   })
   .catch((error) => {
     alert(error.message);
   });


 }, []);

 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <headerStyle className="Header">Rick and Morty Characters</headerStyle>
      <ul> 
        {
        !characterCards ? null : characterCards.map(char => {
          return <Character key={char.id} info={char}/>
        })
      }
    
      </ul>
    </div>
  );
}

export default App;
