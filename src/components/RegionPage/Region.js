import React from "react";
import { useHistory } from "react-router-dom";
import YearComparisonChartDistrict from "../DistrictPage/YearComparisonChartDistrict.js";

function Region({regionInfo, selections, setSelections}){
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
                <h3>Region {regionInfo.region}</h3>
                <button name="region" value={regionInfo.region} onClick={handleSelect}>Select Region {regionInfo.region}</button>
            </div>
            <div className="dataCharts">
                <YearComparisonChartDistrict data={regionInfo['year stats']} categories={{leftcategory: ['applicants', 'pts spent', 'successes'], rightcategory: null}} />
                <YearComparisonChartDistrict data={regionInfo['year stats']} categories={{leftcategory: ['avg pt per app'], rightcategory: null}}/>
                <YearComparisonChartDistrict data={regionInfo['year stats']} categories={{leftcategory: ['% success'], rightcategory: null}}/>
            </div>
        </div>
    )
}

export default Region