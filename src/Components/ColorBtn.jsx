import React from 'react'
import "./Css/BothButtons.css"
import {Link} from 'react-router-dom'

function Button(props){
    return (
        <>
        <button className="color-btn">
          <Link to={props.colorBtnLink} >{props.btnName}</Link>
        </button>
        </>
    )
}
export default Button;