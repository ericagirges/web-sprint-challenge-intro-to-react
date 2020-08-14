import React, { useEffect, useState } from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios";



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
      <h1 className="Header">Rick and Morty Characters</h1>
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
