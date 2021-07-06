import React from 'react'
import Banner from '../Components/Banner'
import AboutPageContent from '../AboutPageContent/AboutPageContent'

function About() {
  return (
    <>
    <Banner pageName="About" pageLink="/about"/>
    <AboutPageContent/>
    </>
  );
}

export default About;
