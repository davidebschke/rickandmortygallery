import {Character} from "../Character";
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'
import React from "react";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div className={"character-gallery"}>
            {props.characters.length === 0 && <p> alert('Hallo Welt) Sorry, there are no characters to display 🫣</p> }
            {props.characters.map((character) => <CharacterCard character={character} key={character.id}/>)}
        </div>
    )
}
