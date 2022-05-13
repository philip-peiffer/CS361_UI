import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function SearchBar({selections, setSelections}){
    const history = useHistory()
    const [searchTerm, setSearchTerm] = useState(undefined)

    const handleClick = (e) => {
        // validate the input
        if (searchTerm === undefined || searchTerm === null){
            return alert("Please input a search term.")
        }
        let searchParams = searchTerm.split('-')
        let searchLength = searchTerm.length
        let region = searchTerm[0]
        let district = searchParams[0]

        if (searchParams.length < 2 || searchLength < 6) {
            return alert("Incorrect search term. Search terms must be 5 characters long and have a dash seperating the first 3 and last 2 (e.g. 410-20)")
        }

        let parseRegion = parseInt(region, 10)
        let parseDistrict = parseInt(district, 10)
        let parseTagEnd = parseInt(searchParams[1])
        if (isNaN(parseRegion) || isNaN(parseDistrict) || isNaN(parseTagEnd)) {
            return alert("Looks like the search term you entered doesn't work.")
        } else {
            // search for the tag in the database
            fetch(`http://localhost:5000/residency/${selections.residency}/species/${selections.species}/tags/${searchTerm}`)
            .then(result => result.json())
            .then(data => {

                // if found, set the selections and redirect to /tags page, else alert the user that the tag wasn't found
                if (data['tag exists']) {
                    setSelections({
                        ...selections,
                        region: region,
                        district: district,
                        tag: searchTerm
                    })

                    history.push('/tags')
                } else {
                    return alert("Hmmm... looks like that tag doesn't exist! Please select the region and district you'd like to view.")
                }
            })
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