import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function SearchBar({selections, setSelections}){
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState(undefined)
    
    function validateSearchVal() {
        if (searchTerm === undefined || searchTerm === null){
            alert("Please input a search term.")
            return false
        }
        let searchParams = searchTerm.split('-')
        let searchLength = searchTerm.length
        let regionSearchTerm = searchTerm[0]
        let districtSearchTerm = searchParams[0]

        if (searchParams.length < 2 || searchLength !== 6) {
            alert("Incorrect search term. Search terms must be 5 characters long and have a dash seperating the first 3 and last 2 (e.g. 410-20)")
            return false
        }

        let parseRegion = parseInt(regionSearchTerm, 10)
        let parseDistrict = parseInt(districtSearchTerm, 10)
        let parseTagEnd = parseInt(searchParams[1])
        if (isNaN(parseRegion) || isNaN(parseDistrict) || isNaN(parseTagEnd)) {
            alert("Looks like the search term you entered doesn't work.")
            return false
        }
        
        return {region: regionSearchTerm, district: districtSearchTerm}
    }

    function fetchTagData(userInput) {
        // search for the tag in the database
        fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/tags/${searchTerm}`)
        .then(result => result.json())
        .then(data => {

            // if found, set the selections and redirect to /tags page, else alert the user that the tag wasn't found
            if (data['tag exists']) {
                setSelections({
                    ...selections,
                    region: userInput.region,
                    district: userInput.district,
                    tag: searchTerm
                })

                history.push(`/tags/${searchTerm}`)
            } else {
                alert("Hmmm... looks like that tag doesn't exist! Please select the region and district you'd like to view.")
            }
        })
    }

    const handleClick = (e) => {
        // validate the input
        let userInput = validateSearchVal()
        if (userInput) {
            fetchTagData(userInput)
        }
    }

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search for Tag..." onChange={(e) => {setSearchTerm(e.target.value)}}></input>
            <button onClick={(e) => handleClick(e)}>Search</button>
        </div>
    )
}

export default SearchBar