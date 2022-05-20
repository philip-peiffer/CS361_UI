import React from "react";
import { useHistory } from "react-router-dom";
import TagYearTable from "./TagYearTable.js";
import PointBarChart from "./PointBarChart.js";

function Tag({data, selections, setSelections}){
    const history = useHistory()

    function handleSelect(e){
        setSelections({
            ...selections,
            [e.target.name]: e.target.value
        })
        console.log(`you selected ${e.target.value}`)
    }

    return(
        <div className="datagroup">
            <div className="sectionTitle">
                <h3>Tag {data.tag}</h3>
                <button name="tag" value={data.tag} onClick={handleSelect}>Select Tag {data.tag}</button>
            </div>
            <div className="dataTables">
                <TagYearTable years={data.years} data={data['year stats']}/>
                <PointBarChart data={data['point stats']} />
            </div>
            <div className="predictions">
                <p>This is my predictions area</p>
                <input type="text" />
                <button>Click to Calculate Draw Odds</button>
            </div>
        </div>
    )
}

export default Tag