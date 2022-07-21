import {Character} from "../Character";
import "./CharacterCard.css"

type CharacterCardProps = {
    character: Character
}


export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className={"character-card"}>
            <p className={"character-card__title"}>{props.character.name}</p>
            <img src={props.character.image}
                 alt={props.character.name}/>
            <p>
                Status:
                {props.character.status}

            </p>
            <p>
                Origin
                {props.character.origin.name}
            </p>

        </div>
    )
}
