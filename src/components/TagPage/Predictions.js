import React, {useState} from "react";
import SimpleTable from "./SimpleTable.js";

function Predictions({data}) {
    const [futureApps, setFutureApps] = useState([])
    const [drawOdds, setDrawOdds] = useState([])
    const [points, setPoints] = useState(0)

    function prepareBodyData() {
        let body = {'tag': data.tag, 'num tags': 0, 'calculated': []}
        let newDrawOdds = []
        data['point stats'].forEach(pointCat => {
            body['num tags'] += pointCat['successes']
            body['calculated'].push(pointCat['future apps'])
            newDrawOdds.push('tbd')
        })

        // add the user to the "calculated" number of applicants in their category of points they've chosen
        body['calculated'][points] += 1
        setFutureApps(body['calculated'])
        setDrawOdds(newDrawOdds)
        return body
    }
    
    async function handleSelect(e){
        // get body of fetch in correct format
        let body = prepareBodyData()

        // fetch draw odds info
        fetch('http://localhost:58555/predictions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(drawSimulResponse => drawSimulResponse.json())
        .then(drawOddsInfo => setDrawOdds(drawOddsInfo['calculated success perc']))
        .catch(err => console.error(err))
    }

    return (
        <div className="predictions">
            <hr></hr>
            <h4>Year 2022 Application Predictions</h4>
            <label htmlFor="points">Enter Your # of Points:</label>
            <input type="number" min="0" max="20" id="points" placeholder="0" onChange={(e) => setPoints(e.target.value)}/>
            <button onClick={handleSelect}>Calculate Draw Odds</button>
            <SimpleTable data={futureApps} titleString={"Predicted Applicants"} />
            <SimpleTable data={drawOdds} titleString={"% Chance of Drawing"} />
        </div>
    )
}

export default Predictions