import "./Guidelines.scss"
import {useState } from "react"

const Guidelines = () => {
  const [guidelines, setGuidelines] = useState([
    {className: "col-12", ruleNo:"1", rule:"Each participant needs to be registered individually. One contestant can submit either one or a maximum of three artworks, but only one artwork should be submitted under one theme.", id:1},
    {className: "col-12",ruleNo:"2", rule:"Open for any space enthusiast representing any university, school, institution or an organization, who are within the age limits.", id:2},
    {className: "col-12",ruleNo:"3", rule:"Anyone who is interested in both art & space can participate in the competition.", id:3 }, 
    {className: "col-12",ruleNo:"4", rule:"Organizers reserve the right to cancel or amend all or any part of the competition or the terms & conditions. However, any changes to the terms & conditions will be informed immediately. Also, the judge board reserve the right to disqualify a contestant or cancel a submission any time.", id:4 },
    {className:"col-12", ruleNo: "4", rule: "By registering for this contest, you hereby agree to receive results on their complication depending on their effort", id:5} 
  ])
  return (
    <div className="guidelines">
      <div className="container">
        <div className="row rule-row">
          <h1>COMPETITION <span style={{color:"gold"}}>GUIDELINES</span></h1>
          {guidelines.map((guideline)=>(
            <div className= {guideline.className} key={guideline.id}>
              <div className="col-1">
                <h6 data-aos="fade-right">{guideline.ruleNo}</h6>
              </div>
              <div className="col-11">
                <p data-aos="fade-left">{guideline.rule}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   );
}
 
export default Guidelines;