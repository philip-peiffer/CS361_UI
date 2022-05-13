import React, {useState, useEffect} from 'react'
import Selections from '../components/Global/Selections.js'
import District from '../components/DistrictPage/District.js'
import Title from '../components/Global/Title.js'
import SearchBar from '../components/Global/Search.js'

function DistrictPage({selections, setSelections}){
    const [fetchData, setFetchData] = useState([])

    const loadData = async () => {
        let fetchResponse = await fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/region/${selections.region}/districts`)
        let fetchBody = await fetchResponse.json()
        setFetchData(fetchBody.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    // const dummyData = {}
    // let years = [2018, 2019, 2020, 2021]
    // let data = [
    //     {
    //         district: 1,
    //         district_data: {
    //             "100": [100, 100, 100, 100],
    //             "101": [101, 101, 101, 101],
    //             "102": [102, 102, 102, 102],
    //             "103": [103, 103, 103, 103],
    //         }
    //     },
    //     {
    //         district: 2,
    //         district_data: {
    //             "200": [200, 200, 200, 200],
    //             "201": [201, 201, 201, 201],
    //             "202": [202, 202, 202, 202],
    //             "203": [203, 203, 203, 203],
    //         }
    //     },

    return (
        <div>
            <Title titlestring={'District Selection'} selections={selections} setSelections={setSelections}/>
            <Selections selections={selections}></Selections>
            <SearchBar selections={selections} setSelections={setSelections}/>
            {fetchData.map((district, index) => {
                return (
                    <District key={index} district={district.district} years={district.years} data={district['district data']} selections={selections} setSelections={setSelections} />
                )
            })}
        </div>
    )
}

export default DistrictPage