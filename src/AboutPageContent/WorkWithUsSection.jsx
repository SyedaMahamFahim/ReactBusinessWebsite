import React  from 'react'
import Button from '../Components/Button'
import "./WorkWithUsSection.css"

const WorkWithUsSection = () => {

    return (
        <>

           <section className="work-with-us-section">
               <div className="work-with-us-div">
               <h1 className="work-with-us-h1" >Let’s work together on your next amazing project</h1>
               <p className="work-with-us-p" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, sit!</p>
               <Button btnName="Contact Us" btnLink="/contact"/>
               </div>
           </section>
        </>
    )
}

export default WorkWithUsSection