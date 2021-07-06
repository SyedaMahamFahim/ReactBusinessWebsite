import React from 'react'
import "../Css/style.css"
import {Link} from 'react-router-dom'
import "./Css/Banner.css"
function Banner(props){
    return (
        <>
        <div className="banner-bg-img">
            <h1>{props.pageName}</h1>
            <h3><Link to="/" style={{color:"black",padding:"0px 5px",textDecoration:"none"}}>Home/</Link>
            <span className="pages-link">
              <Link to={props.pageLink} >{props.pageName}</Link>  </span></h3>
        </div>
        </>
    )
}
export default Banner;