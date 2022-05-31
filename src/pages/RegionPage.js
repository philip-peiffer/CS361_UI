import React, {useEffect, useState} from 'react'
import SearchBar from '../components/Global/Search.js'
import Selections from '../components/Global/Selections.js'
import Title from '../components/Global/Title.js'
import Region from '../components/RegionPage/Region.js'

function RegionPage({selections, setSelections}){

    let [regionData, setRegionData] = useState([])
    
    const loadData = async () => {
        const fetchResponse = await fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/regions_stats`)
        const fetchResponseBody = await fetchResponse.json()
        setRegionData(fetchResponseBody.data)
     };

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <Title titlestring={'Region Selection'} selections={selections} setSelections={setSelections}/>
            <Selections selections={selections}></Selections>
            <SearchBar selections={selections} setSelections={setSelections} />
            {regionData.map((region, index) => {
                return (
                    <Region key={index} regionInfo={region} selections={selections} setSelections={setSelections} />
                )
            })}
        </div>
    )
}

export default RegionPage