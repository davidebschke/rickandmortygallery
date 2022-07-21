import React from "react";

type ActionBarProps = {
    setSearchText: (searchText : string) => void
}

export default function ActionBar(props : ActionBarProps){

    return (
        <input type="text" onChange={event => props.setSearchText(event.target.value)}/>
    )

}