import React, {useState} from 'react'
import { questions } from "./QuestionList";
import MyAccordian from './MyAccordian';
import './Accordian.css';

const Accordian = () => {
    const [data] = useState(questions);
    return (
        <>
            <section className="main-div">
                <h1 className="faqs-h1">FAQS </h1>
        {
                data.map((curElem) => {
                    return <MyAccordian key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
        }
                 </section>
        </>
    )
}

export default Accordian