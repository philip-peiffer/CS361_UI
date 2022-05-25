import React, {useState, useEffect} from 'react'
import SearchBar from '../components/Global/Search'
import Selections from '../components/Global/Selections'
import Title from '../components/Global/Title'
import Tag from '../components/TagPage/Tag'
import YearComparisonChartTag from '../components/TagPage/YearComparisonChartTag'

function TagPage({selections, setSelections}){
    const [tagData, setTagData] = useState([])
    const [lineData, setLineData] = useState({'applicants': [{'loading...': 0}], 'success rate': [{'loading...': 0}], 'pts/app (avg)': [{'loading...': 0}], 'pts spent': [{'loading...': 0}]})
    const lineCats = Object.keys(lineData)

    function reformatData (data) {
        // this function reformats the data so that the line charts can be used. Line charts need the data in format
        // where every tag's stat that you want displayed is grouped by year. Currently data is grouped by tag and then year
        let returnDict = {'applicants': [], 'success rate': [], 'pts/app (avg)': [], 'pts spent': []}

        data[0].years.forEach(year => {
            let i = year - data[0].years[0]
            let applicantDict = {'year': year}
            let successDict = {'year': year}
            let ptperappDict = {'year': year}
            let ptsDict = {'year': year}
            
            data.map(dataPoint => {
                let yearStat = dataPoint['year stats'][i]
                applicantDict[dataPoint.tag] = yearStat['applicants']
                successDict[dataPoint.tag] = yearStat['% success']
                ptperappDict[dataPoint.tag] = yearStat['avg pt per app']
                ptsDict[dataPoint.tag] = yearStat['pts spent']
            })

            returnDict.applicants.push(applicantDict)
            returnDict['success rate'].push(successDict)
            returnDict['pts/app (avg)'].push(ptperappDict)
            returnDict['pts spent'].push(ptsDict)
        })
        setLineData(returnDict)
    }

    const loadData = async () => {
        let fetchTags = await fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/region/${selections.region}/district/${selections.district}/tags`)
        let fetchedTagData = await fetchTags.json()
        setTagData(fetchedTagData.data)
        reformatData(fetchedTagData.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <Title titlestring={'Tag Breakdown'} selections={selections} setSelections={setSelections}/>
            <Selections selections={selections} />
            <SearchBar selections={selections} setSelections={setSelections}/>
            {lineCats.map((cat, index) => {
                return (
                    <YearComparisonChartTag key={index} data={lineData[cat]} category={cat} />
                )
            })}
            {tagData.map((data, index) => {
                return (
                    <Tag key={index} data={data} selections={selections} setSelections={setSelections} />
                )
            })}
        </div>
    )
}

export default TagPage