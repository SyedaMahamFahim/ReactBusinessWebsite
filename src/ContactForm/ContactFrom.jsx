import React from 'react'
import "./ContactForm.css"
const ContactForm=()=>{

    return(
        <div>
        <div className="form_wrapper">
          <div className="form_container">
            <div className="title_container">
              <h2>Any Query?</h2>
              <h3>Feel Free to Contact Us </h3>
            </div>
            <form>
              <div className="row clearfix">
                <div className="col_half">
                  <label>First name</label>
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                    <input type="text" name="first_name" placeholder="John" required />
                  </div>
                </div>
                <div className="col_half">
                  <label>Last name</label>
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                    <input type="text" name="last_name" placeholder="Doe" />
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div className="col_half">
                  <label>Email</label>
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                    <input type="email" name="email" placeholder="johndoe@gmail.com" required />
                  </div>
                </div>
                <div className="col_half">
                  <label>Phone</label>
                  <div className="input_field"> <span><i aria-hidden="true" className="fa fa-phone" /></span>
                    <input type="tel" name="phone" placeholder="Phone no"  />
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <div>
                  <label>Comments</label>
                  <div className="textarea_field"> <span><i aria-hidden="true" className="fa fa-comment" /></span>
                    <textarea cols={46} rows={3} name="comments" defaultValue={""} />
                  </div>
                </div>
              </div>
              <input className="button" type="submit" defaultValue="Sumbit" />
            </form>
          </div>
        </div>
      </div>
    )
}
export default ContactForm