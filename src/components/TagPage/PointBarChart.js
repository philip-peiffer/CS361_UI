import React from "react";
import {BarChart, Bar, Legend, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'

function PointBarChart({data}) {
    return (
        <div className="pointBarChart">
            <BarChart width={750} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="points" />
                <YAxis yAxisId="left" orientation="left"/>
                <YAxis yAxisId="right" orientation="right" stroke="#f76565"/>
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="applicants" fill="#8884d8" />
                <Bar yAxisId="left" dataKey="successes" fill="#82ca9d" />
                <Bar yAxisId="right" dataKey="pts spent" fill="#f76565" />
            </BarChart>
        </div>
    )
}

export default PointBarChart