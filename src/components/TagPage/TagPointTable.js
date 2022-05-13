import React from "react";

function TagPointTable({points, data}){
    let cats = Object.keys(data)
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Stats</th>
                        {
                            points.map((point) => {
                                return(<th key={point}>{point}</th>)
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

export default TagPointTable