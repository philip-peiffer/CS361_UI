import React from "react";

function SelectItem({itemDescription, buttonName, selections, setSelections}){

    function handleChange(e){
        setSelections({
            ...selections,
            [e.target.name]: e.target.value
        })
    }
    
    return(
        <div>
            <button name={buttonName} value={itemDescription} onClick={(e) => handleChange(e)}>Select {itemDescription}</button>
        </div>
    )
}

export default SelectItem