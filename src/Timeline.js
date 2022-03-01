import { useState } from "react";
import "./Timeline.scss"

const Timeline = () => {
  const [times] = useState([
    {class: "open", iconClass: "material-icons", iconName:"play_circle",iconAos:"zoom-in", title:"SUBMISSIONS OPEN",date:"24th Feb 2023", desc:"VIRTUAL OPENING CEREMONY | SUBMISSION STARTS", aos:"fade-up", id: 1}, 
    {class: "open", iconClass: "material-icons", iconName:"announcement",iconAos:"zoom-in", title:"WINNERS ANNOUNCMENT",date:"24TH FEB 22", desc:"VIRTUAL OPENING CEREMONY | ANNOUNCING WINNERS",aos:"fade-down", id: 2},
    {class: "open", iconClass: "material-icons", iconName:"close",iconAos:"zoom-in", title:"SUBMISSIONS CLOSE",date:"24TH FEB 22", desc:"SUBMISSION ENDS",aos:"fade-up", id: 3},
  ])

  return ( 
      <div className="timeline">
        <div className="container">
          <h1 className="text-center" data-aos = "zoom-in" style={{
            marginTop:"-90px", 
            marginBottom:"80px",
            color:"gold"
          }}>TIME LINE</h1>
          <div className="card-deck time-row">
            {times.map((time)=>(
              <div className="card tile"  key= {time.id} data-aos= {time.aos}>
                <span data-aos={time.iconAos} className={time.iconClass}>{time.iconName}</span>
                <h5>{time.title}</h5>
                <p>{time.date}</p>
                <p>{time.desc}</p>
              </div>
            ))}
          </div>
        </div> 
      </div>
    );
}
 
export default Timeline;