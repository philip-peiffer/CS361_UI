import React from "react";

function SelectSpecies({selections, setSelections}){
    function handleClick(e) {
        setSelections({
            ...selections,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h3>Step 1: Select Species</h3>
            <div id="species">
                <button name="species" value="moose" onClick={handleClick}>Moose</button>
                <button name="species" value="goat" onClick={handleClick}>Goat</button>
                <button name="species" value="elk" onClick={handleClick}>Elk</button>
                <button name="species" value="deer" onClick={handleClick}>Deer</button>
                <button name="species" value="antelope" onClick={handleClick}>Antelope</button>
            </div>
        </div>
    )
}

export default SelectSpecies