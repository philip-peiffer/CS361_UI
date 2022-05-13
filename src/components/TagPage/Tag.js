import React from "react";
import { useHistory } from "react-router-dom";
import TagYearTable from "./TagYearTable.js";
import TagPointTable from "./TagPointTable.js";

function Tag({tag, years, points, yearsdata, pointsdata, selections, setSelections}){
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
                <h3>Tag {tag}</h3>
                <button name="tag" value={tag} onClick={handleSelect}>Select Tag {tag}</button>
            </div>
            <div className="dataTables">
                <TagYearTable years={years} data={yearsdata}/>
                <TagPointTable points={points} data={pointsdata} />
            </div>
        </div>
    )
}

export default Tag