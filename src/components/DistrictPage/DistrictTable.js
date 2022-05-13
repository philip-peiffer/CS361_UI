import React from "react";

function DistrictTable({years, data}){
    let cats = Object.keys(data)
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Stats</th>
                        {
                            years.map((year) => {
                                return(<th key={year}>{year}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {cats.map((cat, index) => {
                        return (
                            <tr key={cat}>
                                <td key={index}>{cat}</td>
                                {
                                    data[cat].map((datapoint, index) => {
                                        return(<td key={index}>{datapoint}</td>)
                                    })
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default DistrictTable