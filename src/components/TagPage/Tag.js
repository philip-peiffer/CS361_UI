import React, {useState} from "react";
import TagYearTable from "./TagYearTable.js";
import PointBarChart from "./PointBarChart.js";

function Tag({data, selections, setSelections}){
    const [drawOdds, setDrawOdds] = useState({tag: '', 'num tags': 0, 'calculated': [], 'calculated success perc': [100, 0, 0, 0]})
    const [points, setPoints] = useState(0)
    
    async function handleSelect(e){
        // get body of fetch in correct format
        let body = {'tag': data.tag, 'num tags': 0, 'calculated': []}
        data['point stats'].forEach(pointCat => {
            body['num tags'] += pointCat['successes']
            body['calculated'].push(pointCat['future apps'])
        })

        // fetch draw odds info
        fetch('http://localhost:58555/predictions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(drawSimulResponse => drawSimulResponse.json())
        .then(drawOddsInfo => setDrawOdds(drawOddsInfo))
        .catch(err => console.error(err))
    }

    return(
        <div className="datagroup">
            <div className="sectionTitle">
                <h3>Tag {data.tag}</h3>
                <div>See Odds Calculator Below!</div>
            </div>
            <div className="dataTables">
                <TagYearTable years={data.years} data={data['year stats']}/>
                <PointBarChart data={data['point stats']} />
            </div>
            <div className="predictions">
                <p>This is my predictions area</p>
                <label for="points">Enter Your # of Points:</label>
                <input type="number" min="0" max="20" id="points" placeholder="0" onClick={(e) => setPoints(e.target.value)}/>
                <button onClick={handleSelect}>Calculate Draw Odds</button>
                <div>
                    {drawOdds['calculated success perc'].map((pointCat, index) => {
                        return (
                            <li key={index}>
                                {pointCat}
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tag