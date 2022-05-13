import React from "react";
import SelectItem from "../Global/SelectItem.js";

function SelectResidency({selections, setSelections}){
    return (
        <div>
            <h3>Step 2: Select Residency</h3>
                    <div className="residency">
                        <SelectItem itemDescription="Resident" buttonName={"residency"} selections={selections} setSelections={setSelections}></SelectItem>
                        <SelectItem itemDescription="Non Resident" buttonName={"residency"} selections={selections} setSelections={setSelections}></SelectItem>
                    </div>
        </div>
    )
}

export default SelectResidency