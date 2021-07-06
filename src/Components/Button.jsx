import React from 'react'
import {Link} from 'react-router-dom'
import "./Css/BothButtons.css"

function Button(props){
    return (
        <>
        <button className="transparent-btn">
          <Link  to={props.btnLink} >{props.btnName}</Link>
        </button>
        </>
    )
}
export default Button;