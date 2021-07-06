import React from 'react'
import "../Css/style.css"
import { Link } from 'react-router-dom'
import './footer.css'
import ServiceData from '../ServicePageContent/ServiceData'
import SocialLinkData from './SocialLinkData'
function Footer(props) {
    return (
        <>
                <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic" >About us</div>
              <p className="footer-about-para">Xnitia Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos libero odio veritatis, nulla temporibus a eveniet quae ipsam? Eligendi!</p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone">
                <a href="#" className="footer-links"><i className="fas fa-phone-volume" />+007 9089 6767</a>
              </div>
              <div className="email">
                <a href="#" className="footer-links" ><i className="fas fa-envelope" />abc@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="middle box">
                        <div className="topic">Our Services</div>
                        {
                            ServiceData.map((item, index) => {
                                return (            
                                    <div key={index}>
                                        <Link to={item.url} className="footer-links" >{item.title}</Link>
                                    </div>  
                                        )
                                        })
                                    }
                     </div>
          <div className="right box">
           

            <div className="newsletter">
                    <div id="mc_embed_signup" >
        <form action="https://gmail.us10.list-manage.com/subscribe/post?u=dbcccf1a1392e291d94b269b1&id=e4603c4d27" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="container" style={{alignItems: 'left', marginBottom: '20px'}}>
            <div className="topic">Subscribe us</div>
            </div>
            <div className="mc-field-group" style={{}}>
              <input type="text"  className="required name newsletter-css" id="mce-NAME" placeholder="Name" />
            </div>
            <div className="mc-field-group" style={{}}>
              <input type="email"  className="required email newsletter-css" id="mce-EMAIL" placeholder="Email" 
              style={{
                height: "45px",
                width: "100%",
                outline: "none",
                color: "#d9d9d9",
                background: "#000",
                borderRadius: "5px",
                paddingLeft: "10px",
                fontSize: "17px",
                border: "2px solid #222222",
                marginTop:"10px"
              }}
              
              
              />
            </div>
            
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" />
              <div className="response" id="mce-success-response"  />
            </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_dbcccf1a1392e291d94b269b1_e4603c4d27" tabIndex={-1} defaultValue /></div>
            <div className="clear" style={{}}><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button newsletter-btn" style={{
            
        }} /></div>
          </div>

          <div className="media-icons">

{
     SocialLinkData.map((item, index) => {
        return (
            <a href={item.url} className="soical-links" key={index}>
                 <i className={item.cName} aria-hidden="true"></i>
            </a>
                )
        })
}
</div>

        </form>
      </div>
    </div>






        </div>
    </div>
        <div className="bottom">
          <p>Copyright © 2021 <a href="#">Xnitia</a> All rights reserved</p>
        </div>
      </footer>
        </>
    )
}
export default Footer;