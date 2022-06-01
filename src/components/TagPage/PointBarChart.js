import React from "react";
import {BarChart, Bar, Legend, CartesianGrid, Tooltip, XAxis, YAxis, Label} from 'recharts'

function PointBarChart({data}) {
    return (
        <div className="pointBarChart">
            <BarChart width={750} height={500} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="points" label={{ value: 'Point Category', position: 'insideBottom', offset: -3}}/>
                <YAxis yAxisId="left" orientation="left" label={{ value: 'Num People', angle: -90, position: 'insideLeft' }}/>
                <YAxis yAxisId="right" orientation="right" stroke="#f76565" label={{ value: 'Points', angle: -90, position: 'insideRight' }}/>
                <Tooltip />
                <Legend verticalAlign="insideTop"/>
                <Bar yAxisId="left" dataKey="applicants" fill="#8884d8" />
                <Bar yAxisId="left" dataKey="successes" fill="#82ca9d" />
                <Bar yAxisId="right" dataKey="pts spent" fill="#f76565" />
            </BarChart>
        </div>
    )
}

export default PointBarChart