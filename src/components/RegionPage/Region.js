import React from "react";
import { useHistory } from "react-router-dom";
import RegionTable from "./RegionTable.js";

function Region({region, years, dataObj, selections, setSelections}){
    const history = useHistory()

    function handleSelect(e){
        setSelections({
            ...selections,
            [e.target.name]: e.target.value
        })
        history.push(`/districts`)
    }

    return(
        <div className="datagroup">
            <div className="sectionTitle">
                <h3>Region {region}</h3>
                <button name="region" value={region} onClick={handleSelect}>Select Region {region}</button>
                <p>
                    A description of Region {region} goes here
                </p>
            </div>
            <div className="dataTables">
                <RegionTable years={years} dataObj={dataObj}/>
            </div>
        </div>
    )
}

export default Region