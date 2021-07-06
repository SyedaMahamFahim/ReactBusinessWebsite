import React from 'react'
import ServiceData from './ServiceData'
import PagesMainSectionContent from '../Components/PagesMainSectionContent';
import "./Service.css"
import ColorBtn from '../Components/ColorBtn'
const ServiceContent = () => {

  return (
    <>
     <PagesMainSectionContent 
        MainSectionTitle="Our Services"
        MainSectionParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt"
        />
      <div className="wrapper">
       
       
        {
          ServiceData.map((val, index) => {
            return (
              <>
                <div className="single-service" key={index}>
                  <div className="social">
                    <i className={val.cName} /></div>
                  <span />
                  <h3>
                    {val.title}</h3>
                  <p>
                    {val.desc}</p>
                    <ColorBtn btnName="Read More" colorBtnLink={val.url} />
                </div>


              </>
            )
          })
        }
    <div className="right-float-of-service-page">hey i am maham</div>
      </div>


    </>
  )
}

export default ServiceContent