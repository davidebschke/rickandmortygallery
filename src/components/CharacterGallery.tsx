import {Character} from "../Character";
import CharacterCard from "./CharacterCard";

type CharacterGalleryProps = {
    chars: Character[]
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div>
            {
                props.chars.map((char) => <CharacterCard char={char}
                                                                   key={char.id}/>)
            }
        </div>
    )
}
