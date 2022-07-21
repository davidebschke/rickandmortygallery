import React, {useState} from 'react';
import './App.css';
import CharacterGallery from "./components/CharacterGallery";
import Header from "./components/Header";
import ActionBar from "./components/ActionBar";
import {Character} from "./Character";
import axios from 'axios';

function App() {

    const message ='Hello World'
    const [characters,setCharacter]= useState<Character[]>([])  // Neues Zeug
    const daten="";
    axios.get("https://rickandmortyapi.com/api/character")
        .then((response)=>{return response.data})
    .then((data) =>{setCharacter(data.results)})
        .catch(console.error)





    const [searchText, setSearchText] = useState<string>("")
    const filteredCharacters = characters.filter((character: { name: string; }) => character.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
        <div className="App">
            <Header/>
            <ActionBar setSearchText={setSearchText}/>
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;
