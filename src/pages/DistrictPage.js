import React, {useState, useEffect} from 'react'
import Selections from '../components/Global/Selections.js'
import District from '../components/DistrictPage/District.js'
import Title from '../components/Global/Title.js'
import SearchBar from '../components/Global/Search.js'

function DistrictPage({selections, setSelections}){
    const [districtData, setDistrictData] = useState([])
    const [lineData, setLineData] = useState({'applicants': [{'loading...': 0}], 'success rate': [{'loading...': 0}], 'pts/app (avg)': [{'loading...': 0}], 'pts spent': [{'loading...': 0}]})
    const lineCats = Object.keys(lineData)

    function reformatData (data) {
        // this function reformats the data so that the line charts can be used. Line charts need the data in format
        // where every district's stat that you want displayed is grouped by year. Currently data is grouped by district and then year
        let returnDict = {'applicants': [], 'success rate': [], 'pts/app (avg)': [], 'pts spent': []}

        data[0].years.forEach(year => {
            let i = year - data[0].years[0]
            let applicantDict = {'year': year}
            let successDict = {'year': year}
            let ptperappDict = {'year': year}
            let ptsDict = {'year': year}
            
            data.map(districtInfo => {
                let yearStat = districtInfo['year stats'][i]
                applicantDict[districtInfo.district] = yearStat['applicants']
                successDict[districtInfo.district] = yearStat['% success']
                ptperappDict[districtInfo.district] = yearStat['avg pt per app']
                ptsDict[districtInfo.district] = yearStat['pts spent']
            })

            returnDict.applicants.push(applicantDict)
            returnDict['success rate'].push(successDict)
            returnDict['pts/app (avg)'].push(ptperappDict)
            returnDict['pts spent'].push(ptsDict)
        })
        setLineData(returnDict)
    }

    const loadData = async () => {
        let fetchResponse = await fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/region/${selections.region}/districts`)
        let fetchBody = await fetchResponse.json()
        setDistrictData(fetchBody.data)
        reformatData(fetchBody.data)
    }

    useEffect(() => {
        loadData();
    }, [])


    return (
        <div>
            <Title titlestring={'District Selection'} selections={selections} setSelections={setSelections}/>
            <Selections selections={selections}></Selections>
            <SearchBar selections={selections} setSelections={setSelections}/>
            {districtData.map((district, index) => {
                return (
                    <District key={index} districtInfo={district} selections={selections} setSelections={setSelections} />
                )
            })}
        </div>
    )
}

export default DistrictPage