import {Character} from "../Character";
import "./CharacterCard.css"

type CharacterCardProps = {
    char: Character
}


export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className={"character-card"}>
            <p className={"character-card__title"}>{props.char.name}</p>
            <img src={props.char.image}
                 alt={props.char.name}/>
            <p>
                Status:
                {props.char.status}

            </p>
            <p>
                Origin
                {props.char.origin.name}
            </p>

        </div>
    )
}
