import React from 'react'
import Banner from '../Components/Banner'
import PortfolioApp from '../PortfolioTabs/PortfolioApp'

function Portfolio() {
  return (
    <>
    <Banner pageName="Portfolio" pageLink="/portfolio"/>
    <PortfolioApp/>
    </>
  );
}

export default Portfolio;
