import Aos from "aos"; 
import "aos/dist/aos.css";
import { useEffect } from "react";

import { useState } from "react";
import "./Prizes.scss";


const Prizes = () => {
  const [prizes, setPrizes] = useState([
    {logo:"images/trophy.png", title:"WINNER", desc:"DIVISION 1", id:1},
    {logo:"images/trophy.png", title:"WINNER", desc:"DIVISION 2", id:2},
    {logo:"images/trophy.png", title:"WINNER", desc:"DIVISION 3", id:3}
  ])
  useEffect(()=>{
    Aos.init({
      duration:1000
    });
  })

  return ( 
    <div className="prizes" data-aos = "fade-up">
      <div className="container" >
        <h1 style={{color:"gold"}} className = "text-center">Prizes</h1>
        <p style={{color:"#fff"}} className="text-center">Winners will receive valuable certificates & cash prizes worth LKR 50,000.Winners will be rewarded many more benefits free of charge in our important space-related sessions & workshops for a particular period.</p>
        <div className="row">
          {prizes.map((prize)=>(
            <div className="col-md-4 col-sm-12" key={prize.id} data-aos="flip-left">
              <div className="card">
                <img src={prize.logo} alt=""  className="mx-auto d-block img-fluid"/>
                <h5>{prize.title}</h5>
                <h6>{prize.desc}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

   );
}
 
export default Prizes;