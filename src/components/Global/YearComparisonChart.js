import React from "react";
import {LineChart, Line, Legend, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'

function YearComparisonChart({data, category}) {
    const dataKeys = Object.keys(data[0])
    const colors = ["red", "black", "dodgerblue", "olive", "darkcyan", "FireBrick", "LightPink", "orchid"]

    return (
        <div className="yearComparisonChart">
            <div>{category}</div>
            <LineChart width={500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                {dataKeys.map((key, index) => {
                    if (key !== 'year') {
                        return (<Line key={index} type="monotone" dataKey={key} stroke={colors[index]} />)
                    }
                })}
            </LineChart>
        </div>
    )
}

export default YearComparisonChart