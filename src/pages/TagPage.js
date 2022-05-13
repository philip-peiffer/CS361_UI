import React, {useState, useEffect} from 'react'
import SearchBar from '../components/Global/Search'
import Selections from '../components/Global/Selections'
import Title from '../components/Global/Title'
import Tag from '../components/TagPage/Tag'

function TagPage({selections, setSelections}){
    const [fetchData, setFetchData] = useState([])

    const loadData = async () => {
        let fetchResponse = await fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/region/${selections.region}/district/${selections.district}/tags`)
        let fetchBody = await fetchResponse.json()
        setFetchData(fetchBody.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <Title titlestring={'Tag Breakdown'} selections={selections} setSelections={setSelections}/>
            <Selections selections={selections} />
            <SearchBar selections={selections} setSelections={setSelections}/>
            {fetchData.map((data, index) => {
                return (
                    <Tag key={index} tag={data.tag} years={data.years} points={data['point cats']} yearsdata={data['year stats']} pointsdata={data['point stats']} selections={selections} setSelections={setSelections} />
                )
            })}
        </div>
    )
}

export default TagPage