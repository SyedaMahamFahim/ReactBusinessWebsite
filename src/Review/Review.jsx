import React, { useState,useEffect } from 'react'
import "./Review.css"
import ReviewsApi from "./ReviewApi"
import Arrows from './Arrow'
import ReviewContent from './ReviewContent'
import PagesMainSectionContent from '../Components/PagesMainSectionContent';

const len = ReviewsApi.length - 1;
const Review=()=>{
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 10000);
        return () => clearInterval(interval);
      }, [activeIndex]);
   
    
    return(
        <>
        
        <PagesMainSectionContent 
        MainSectionTitle="Our Precious Clients Review"
        MainSectionParagraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />


<div className="review-container">
    

<ReviewContent activeIndex={activeIndex} reviewData={ReviewsApi} />
      <Arrows
        prevPerson={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextPerson={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
     
    
</div>
        {/* <h1 className="review-container-title">Our Reviews</h1> */}
      

        </>
    )
}
export default Review
