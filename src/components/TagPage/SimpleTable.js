import React from "react";

/**
 * This function requires a single array as input as well as a title string. The function returns a table with index values
 * as the header and the array values as the row.
 * @param {array} data
 * @param {string} titleString
 * @returns 
 */
function SimpleTable({data, titleString}){
    
    return (
        <div className="simpleTable">
            <table>
                <caption>{titleString}</caption>
                <thead>
                    <tr>
                        {
                            data.map((dataVal, index) => {
                                return(<th key={index}>{index}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data.map((dataVal, index) => {
                            return (   
                                <td key={index}>{dataVal}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SimpleTable