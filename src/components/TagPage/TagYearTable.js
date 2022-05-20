import React, {useEffect} from "react";

function TagYearTable({years, data}){
    
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