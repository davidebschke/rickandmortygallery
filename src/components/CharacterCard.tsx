import {Character} from "../Character";

type CharacterCardProps = {
    char: Character
}


export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div>
            <p>{props.char.name}</p>
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
