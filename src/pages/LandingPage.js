import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";
import SelectResidency from '../components/LandingPage/SelectResidency.js'
import SelectSpecies from '../components/LandingPage/SelectSpecies.js'
import Selections from '../components/Global/Selections.js';
import Title from '../components/Global/Title.js';

function LandingPage({selections, setSelections}){
    const history = useHistory()

    const navigateToRegions = () => {
        if (selections.residency === null || selections.species === null) {
            alert("Please select a species and residency before proceeding.")
        } else {
            history.push(`/regions`)
        }
    }
    
    return (
        <div>
            <Title titlestring={'Draw Odds Calculator - Montana'} selections={selections} setSelections={setSelections} />
            <Selections selections={selections}></Selections>
            <SelectSpecies selections={selections} setSelections={setSelections} />
            <SelectResidency selections={selections} setSelections={setSelections} />
            <section className="appDescription">
                <h4>Quick Start Instructions:</h4>
                <p>
                    Welcome to the Montana Draw Odds Calculator! This tool was created to help people research potential 
                    tag applications for the Montana hunting season. 
                </p>
                <p>
                    To get started, you must choose your residency and the species you wish to hunt. This is because the MT FWP
                    likes to re-use tag numbers between species. After these selections have been made, smash the "Let's Go!" button, or read on to find out more about the app.
                </p>

                <h4>Detailed Instructions:</h4>
                <p>
                    This section is completely voluntary - if you feel ready to go hit the "Let's Go!" button below.
                    If you've stuck around - welcome. This app is going to walk you through different selections, ultimately leading to you choosing a tag to calculate your draw odds. Montana is split into 7 different regions. These regions are then split into districts. Within each district, you have certain tags that you can apply for. As you've seen, you already chose species and residency. 
                </p>
                <p>
                    The next page will present you with data about the different <em>regions</em> so that you can choose a region to explore. You will then be presented with data about the different <em>districts</em>. This will then be followed by <em>tags</em>. Once you've settled on a tag, you will then have the option of calculating your draw odds for that tag.
                </p>
                <p>
                    Your selections to your current point will be displayed throughout all of the steps at the top of the webpage. To go back, simply click the browser "back" button. To start over, click the "home" button at the top right. 
                </p>
            </section>

            <button type='button' onClick={navigateToRegions}>Let's Go!</button>
        </div>
    
    )
}

export default LandingPage