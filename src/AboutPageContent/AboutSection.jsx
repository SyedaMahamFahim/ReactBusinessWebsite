import React from 'react'
import ColorBtn from '../Components/ColorBtn';
import PagesMainSectionContent from '../Components/PagesMainSectionContent';
import "./AboutSection.css"

const AboutSection = () => {
    
    return (
        <>

        <PagesMainSectionContent 
        MainSectionTitle="About Us"
        MainSectionParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt"
        />
        <div className="about-section-container">
                <div className="about-section-row">
                    <div className="about-section-img" >
                        <img src="https://blog.hubspot.com/hubfs/about-page.jpg" alt="" className="about-img" />
                    </div>
                    <div className="about-section-detail" >
                        <p className="about-para">Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
                        </p>
                        <ul className="about-ul">
                            <li className="about-li">Lorem ipsum dolor sit amet.</li>
                            <li className="about-li">Lorem ipsum dolor sit amet.</li>
                            <li className="about-li">Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <ColorBtn btnName="Read More" btnLink="/about"/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection