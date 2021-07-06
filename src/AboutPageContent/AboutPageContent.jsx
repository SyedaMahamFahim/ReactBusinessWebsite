import React from 'react'
import AboutSection from './AboutSection';
import Review from '../Review/Review'
import OurTeam from './OurTeam';
import WorkWithUsSection from './WorkWithUsSection';

const AboutPageContent = () => {

    return (
        <>

           <AboutSection/>
            

            
            <OurTeam/>
            <br /><br />
            <Review/>
            <WorkWithUsSection/>
        </>
    )
}

export default AboutPageContent