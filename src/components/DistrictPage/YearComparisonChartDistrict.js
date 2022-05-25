import React from "react";
import {LineChart, Line, Legend, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'

function YearComparisonChartDistrict({data, categories}) {
    const colors = ["black", "red", "dodgerblue", "olive", "darkcyan", "FireBrick", "LightPink", "orchid"]

    if (categories.rightcategory !== null && categories.rightcategory !== undefined) {
        console.log(categories)
        return (
            <div className="yearComparisonChart">
                <LineChart width={500} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" stroke={colors[1]} />
                    <Tooltip />
                    <Legend />
                    {categories.leftcategory.map((cat, index) => {
                        return (<Line key={index} yAxisId="left" type="monotone" dataKey={cat} stroke={colors[index]} />)
                    })}
                    {categories.rightcategory.map((cat, index) => {
                        return (<Line key={index} yAxisId="right" type="monotone" dataKey={cat} stroke={colors[index*2+1]} />)
                    })}
                </LineChart>
            </div>
        )
    } else {
        return (
            <div className="yearComparisonChart">
                <LineChart width={500} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {categories.leftcategory.map((cat, index) => {
                        return (<Line key={index} type="monotone" dataKey={cat} stroke={colors[index]} />)
                    })}
                </LineChart>
            </div>
        )
    }
}

export default YearComparisonChartDistrict