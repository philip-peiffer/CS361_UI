import React from "react";
import '../../App.css';

function Selections({selections}){
    let keys = Object.keys(selections)

    return (
        <ul className="selectionMap"> Parameters Selected...
            {keys.map((selection) => {
                if (selections[selection] === null) {
                    return
                } else{
                    return (<li key={selection}>{selection}: {selections[selection]}</li>)
                }
            })}
        </ul>
    )
}

export default Selections