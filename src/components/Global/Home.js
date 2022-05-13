import React from "react";
import {BiHome} from 'react-icons/bi'
import { useHistory } from "react-router-dom";

function HomeIcon({selections, setSelections}){
    const history = useHistory()

    function handleClick(){
        selections = {species: null, residency: null, region: null, district: null, tag: null}
        setSelections(selections)
        history.push('/')
    }

    return(
        <div className='home' onClick={handleClick}>
            <BiHome />
        </div>
    )
}

export default HomeIcon