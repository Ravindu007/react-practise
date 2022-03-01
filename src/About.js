import "./About.scss"

const About = () => {
  return ( 
    <div className="about ">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-md-6 para-about">
              <h4><span style={{color:"gold"}}>SEDS Space Arts 2021 </span>| Global Art Competition</h4>
              <p>The SEDS Space Arts Competition 2021 is an art competition which will open up to both local and the international space enthusiastic artists who will compete under space related themes. This will be happening as a virtual event and also done according to the global community’s health and safety conditions because of the Covid-19 pandemic. Event will be held according to terms and conditions which are provided by the organizing committee with the supervision of panel of judges.</p>
          </div>
          <div className="col-md-6 img-about ">
             <img src="images/Space Whale Modern Minimal Music Album Cover Art 1.png" alt="" className="mx-auto d-block img-fluid"/>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default About;