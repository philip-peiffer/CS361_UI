import React from 'react'
import HomeIcon from './Home'

function Title({titlestring, selections, setSelections}){
    return(
        <div className='title'>
            <h1>{titlestring}</h1>
            <HomeIcon selections={selections} setSelections={setSelections}/>
        </div>
    )
}

export default Title