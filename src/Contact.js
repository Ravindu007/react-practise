import "./Contact.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faTwitterSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons"

import Aos from "aos"; 
import "aos/dist/aos.css";

import { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000
    });
  })
  return ( 
    <div className="contact-us" data-aos="fade-up">
      <div className="container">
        <h1 style={{textAlign: "center"}}>CONTACT US</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h5>KEEP IN TOUCH</h5>
            <form action="" className="form text-center">
              <div className="form-group">
                <input type="text" className="input" placeholder="Name"/>
              </div>
              <div className="form-group">
                <input type="text"  className="input" placeholder="Email"/>
              </div>
              <div className="form-group">
               <textarea name="message" id="message" cols="30" rows="10" className="input" placeholder="Message"></textarea>
              </div>
              <button className="btn btn-warning">SUBMIT</button>

              <div className="icons" data-aos="fade-up">
                  <FontAwesomeIcon icon={faFacebookSquare} ></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faInstagramSquare} ></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faTwitterSquare} ></FontAwesomeIcon>
              </div>


            </form>
          </div>
          <div className="col-md-6 col-sm-12 img">
            <img src="https://images.unsplash.com/photo-1644531918658-efa78b0912e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" className="mx-auto d-block img-fluid"/>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;