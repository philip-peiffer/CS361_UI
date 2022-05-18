import React, {useEffect} from "react";

function TagYearTable({years, data}){
    const blankDataCats = Object.keys(data[0])

    // function createBlankDataObject(year) {
    //     let blankDataObject = {}
    //     blankDataCats.forEach((cat) => {
    //         if (cat === "year") {
    //             blankDataObject[cat] = year
    //         } else {
    //             blankDataObject[cat] = 0
    //         }
    //     })
    //     return blankDataObject
    // }

    // function insertBlankDataObject(dataObject, index) {
    //     // grab the data from the index as a copy
    //     let moveData = data[index]

    //     // insert the new dataObject into that index
    //     data[index] = dataObject

    //     // loop from next index to end of list, moving data right as you go
    //     for (let i=index+1; i<data.length; i++) {
    //         let rightData = data[i]
    //         data[i] = moveData
    //         moveData = rightData
    //     }

    //     data.push(moveData)
    // }

    // function handleMissingYearData () {
    //     let dataYears = data.map((dataYear) => {
    //         return dataYear.year
    //     })
    
    //     if (years.length !== dataYears.length) {
    //         let j=0
    //         for (let i=0; i<years.length; i++) {
    //             // compare years to see if a year is missing. The years array always starts at the same date and runs to the same
    //             // date. Therefore, if they're off then dataYears will be ahead of years so move years pointer but not dataYears
    //             // pointer in that case
    //             if (years[i] - dataYears[j] !== 0) {
    //                 let missingData = createBlankDataObject(years[i])
    //                 insertBlankDataObject(missingData, i)
    //             } else {
    //                 j++
    //             }
    //         }
    //     }
    // }

    // useEffect(() => {
    //     handleMissingYearData()
    // }, [])
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Stats</th>
                        {
                            years.map((year, index) => {
                                return(<th key={year}>{year}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Apps</td>
                        {data.map((year, index) => {
                            return(<td key={index}>{year.applicants}</td>)
                        })}
                    </tr>
                    <tr>
                        <td>Successful</td>
                        {data.map((year, index) => {
                            return(<td key={index}>{year.successes}</td>)
                        })}
                    </tr>
                    <tr>
                        <td>{'% Success'}</td>
                        {data.map((year, index) => {
                            return(<td key={index}>{year['% success']}</td>)
                        })}
                    </tr>
                    <tr>
                        <td>{'Pts/App'}</td>
                        {data.map((year, index) => {
                            return(<td key={index}>{year['avg pt per app']}</td>)
                        })}
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default TagYearTable