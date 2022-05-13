import React from "react";
import { useHistory } from "react-router-dom";
import DistrictTable from "./DistrictTable.js";

function District({district, years, data, selections, setSelections}){
    const history = useHistory()

    function handleSelect(e){
        setSelections({
            ...selections,
            [e.target.name]: e.target.value
        })
        history.push('/tags')
    }

    return(
        <div className="datagroup">
            <div className="sectionTitle">
                <h3>District {district}</h3>
                <button name="district" value={district} onClick={handleSelect}>Select District {district}</button>
            </div>
            <div className="dataTables">
                <DistrictTable years={years} data={data}/>
            </div>
        </div>
    )
}

export default District