import React, {useState} from 'react'

const MyAccordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="main-heading">
                
                
                <div className="faqs-float-left">
                <h3  >{question}</h3>
                </div>
                <div  className="faqs-float-right">
                <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
                </div>
                
            </div>
            { show &&  <p className="answers"> {answer} </p> }
         
        </>
    )
}

export default MyAccordian