import React from "react";
import { useHistory } from "react-router-dom";
import DistrictTable from "./DistrictTable.js";

function District({districtInfo, selections, setSelections}){
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
                <h3>District {districtInfo.district}</h3>
                <button name="district" value={districtInfo.district} onClick={handleSelect}>Select District {districtInfo.district}</button>
            </div>
            <div className="dataTables">
                <DistrictTable years={districtInfo.years} data={districtInfo['year stats']}/>
            </div>
        </div>
    )
}

export default District