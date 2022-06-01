import React, {useState} from "react";
import TagYearTable from "./TagYearTable.js";
import PointBarChart from "./PointBarChart.js";
import Predictions from "./Predictions.js";

function Tag({data, selections, setSelections}){
    

    return(
        <div className="datagroup">
            <div className="sectionTitle">
                <h3>Tag {data.tag}</h3>
                <div>See Odds Calculator Below!</div>
            </div>
            <TagYearTable years={data.years} data={data['year stats']}/>
            <PointBarChart data={data['point stats']} />
            <Predictions data={data} />            
        </div>
    )
}

export default Tag