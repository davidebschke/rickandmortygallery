import {Character} from "../Character";
import CharacterCard from "./CharacterCard";
import './CharacterGallery.css'

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div className={"character-gallery"}>
            {
                props.characters.map((character) => <CharacterCard character={character}
                                                                   key={character.id}/>)
            }
        </div>
    )
}
