import React from 'react'
import "./Css/MainPagesSection.css"
function PagesMainSectionContent(props) {
    
    return (
        <>
            <section className="pages-main-section" >
                <h1 className="pages-main-section-h1" > {props.MainSectionTitle}</h1>
                <p className="pages-main-section-p" >{props.MainSectionParagraph}</p>
                
            </section>
        </>
    )
}
export default PagesMainSectionContent;
