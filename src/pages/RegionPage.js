import React, {useEffect, useState} from 'react'
import SearchBar from '../components/Global/Search.js'
import Selections from '../components/Global/Selections.js'
import Title from '../components/Global/Title.js'
import Region from '../components/RegionPage/Region.js'

function RegionPage({selections, setSelections}){

    let [fetchData, setFetchData] = useState([])
    
    const loadData = async () => {
        const fetchResponse = await fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/regions_stats`)
        const fetchResponseBody = await fetchResponse.json()
        setFetchData(fetchResponseBody.data)
     };

    useEffect(() => {
        loadData();
    }, [])

    // const fetchData = {}
    // let years = [2018, 2019, 2020, 2021]
    // let data = [
    //     {
    //         region: 1,
    //         region_data: {
    //             "100": [100, 100, 100, 100],
    //             "101": [101, 101, 101, 101],
    //             "102": [102, 102, 102, 102],
    //             "103": [103, 103, 103, 103],
    //         }
    //     },
    //     {
    //         region: 2,
    //         region_data: {
    //             "200": [200, 200, 200, 200],
    //             "201": [201, 201, 201, 201],
    //             "202": [202, 202, 202, 202],
    //             "203": [203, 203, 203, 203],
    //         }
    //     },
    //     {
    //         region: 3,
    //         region_data: {
    //             "300": [300, 300, 300, 300],
    //             "301": [301, 301, 301, 301],
    //             "302": [302, 302, 302, 302],
    //             "303": [303, 303, 303, 303],
    //         }
    //     },
    //     {
    //         region: 4,
    //         region_data: {
    //             "400": [400, 400, 400, 400],
    //             "401": [401, 401, 401, 401],
    //             "402": [402, 402, 402, 402],
    //             "403": [403, 403, 403, 403],
    //         }
    //     },
    //     {
    //         region: 5,
    //         region_data: {
    //             "500": [500, 500, 500, 500],
    //             "501": [501, 501, 501, 501],
    //             "502": [502, 502, 502, 502],
    //             "503": [503, 503, 503, 503],
    //         }
    //     },
    //     {
    //         region: 6,
    //         region_data: {
    //             "600": [600, 600, 600, 600],
    //             "601": [601, 601, 601, 601],
    //             "602": [602, 602, 602, 602],
    //             "603": [603, 603, 603, 603],
    //         }
    //     },
    //     {
    //         region: 7,
    //         region_data: {
    //             "700": [700, 700, 700, 700],
    //             "701": [701, 701, 701, 701],
    //             "702": [702, 702, 702, 702],
    //             "703": [703, 703, 703, 703],
    //         }
    //     },
    // ]
    // fetchData.years = years
    // fetchData.data = data

    return (
        <div>
            <Title titlestring={'Region Selection'} selections={selections} setSelections={setSelections}/>
            <Selections selections={selections}></Selections>
            <SearchBar selections={selections} setSelections={setSelections} />
            <div>
                {
                    fetchData.map((data, index) => {
                        return (<Region key={index} region={data.region} years={data.years} dataObj={data} selections={selections} setSelections={setSelections} />)
                    })
                }
            </div>
        </div>
    )
}

export default RegionPage