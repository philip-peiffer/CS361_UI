import React, {useState, useEffect} from 'react'
import SearchBar from '../components/Global/Search'
import Selections from '../components/Global/Selections'
import Title from '../components/Global/Title'
import Tag from '../components/TagPage/Tag'

function TagPage({selections, setSelections}){
    const [tagData, setTagData] = useState([])

    const loadData = async () => {
        let fetchTags = await fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/region/${selections.region}/district/${selections.district}/tags`)
        let tagData = await fetchTags.json()
        setTagData(tagData.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <Title titlestring={'Tag Breakdown'} selections={selections} setSelections={setSelections}/>
            <Selections selections={selections} />
            <SearchBar selections={selections} setSelections={setSelections}/>
            {tagData.map((data, index) => {
                return (
                    <Tag key={index} data={data} selections={selections} setSelections={setSelections} />
                )
            })}
        </div>
    )
}

export default TagPage