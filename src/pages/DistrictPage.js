import React, {useState, useEffect} from 'react'
import Selections from '../components/Global/Selections.js'
import District from '../components/DistrictPage/District.js'
import Title from '../components/Global/Title.js'
import SearchBar from '../components/Global/Search.js'

function DistrictPage({selections, setSelections}){
    const [districtData, setDistrictData] = useState([])

    const loadData = async () => {
        let fetchResponse = await fetch(`http://localhost:5000/residency/${"resident"}/species/${"elk"}/region/${1}/districts`)
        let fetchBody = await fetchResponse.json()
        setDistrictData(fetchBody.data)
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