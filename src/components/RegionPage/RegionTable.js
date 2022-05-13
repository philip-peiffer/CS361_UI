import React from "react";

function RegionTable({years, dataObj, caption}){
    let stat_cats = Object.keys(dataObj)
    
    return (
        <div>
            <table>
                <caption>{caption}</caption>
                <thead>
                    <tr>
                        <th>Statistic</th>
                        {
                            years.map((year) => {
                                return(<th key={year}>{year}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {stat_cats.map((stat, index) => {
                        if (stat === 'region' || stat === 'years') {
                            return
                        } else {
                            return (
                                <tr key={stat}>
                                    <td key={index}>{stat}</td>
                                    {
                                        (dataObj[stat]).map((datapoint, index) => {
                                            return(<td key={index}>{datapoint}</td>)
                                        })
                                    }
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default RegionTable