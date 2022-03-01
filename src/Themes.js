import "./Themes.scss";

import { useState } from "react";

const Themes = () => {

  const [themes] = useState([
    {image:"images/first contact.webp", title:"Firts Contact", header: "What would it be like to meet the aliens for the first time?", p:"Are aliens real? We don't know for sure but we want to believe it. The universe is a vast expanse and alien life is potent. The renowned science writer Arthur C.Clake once said, Two possibilities exist: Either we are alone in the universe or we are not. Both are equally terrifying. Humans have searched extraterrestrial life for more than a century and Drake's work inspired it.     Furthermore, there many controversial pieces of evidence for alien life in history. When first we meet those aliens in outer space, will we and they be able to converse? Although there are enormous obstacles that would be involved in establishing mutual contact with such beings. The first contact would be benefit or harm for humanity. Sometimes, they can become our closest friends in other planets.", id:1},
    {
      image: "images/the next stop.webp", title:"The Next Stop", header:"The Next Stop", p:"Humans have always wondered about the objects seen in the night sky. With the development of technology, it became possible to send machines, animals and the humans beyond Earth's atmosphere and into outer space. From here onwards budding ideas on SPACE TRAVEL emerged. Space exploration had already captured the minds of many people, not only of astronauts and scientists but also of writers and artists.Space exploration has ignited the curiosity of mankind about the universe. It has captured the world's attention since the origin of famous Space Race between the Soviet Union and the US during the Cold War, which culminated in the US landing the first humans on the moon in 1969.Furthermore, there were so many important milestones achieved in the history of space exploration. Currently emerged the concept of space tourism, to experience space travel for recreational purposes such as a journey to ISS (International Space Station) and interstellar travel (is in its development stage)."
    }, 
    {
      image:"images/cosomos.webp", title:"Cosmos 2222", header: "What the future civilization could look like ?", p: "While the future cannot be predicted with certainty, present understanding in various scientific fields allows for the prediction of future civilization. Special attention will be devoted to the methodological, economic, sociological and medical aspects of the progress of civilization.There will come a time when we deplete the natural sources on Earth due to the high population growth. And also there will be more environmental pollution. Technology has the power to do many things much easier using Robots. Rather than humans working with machines, automation is likely to make some jobs redundant.As the world becomes ever more crowded, it will become practically impossible to find a patch of land free from human presence. Great minds have postulated that humanity must spread itself across multiple planets to avoid being entirely wiped out by one natural disaster"
    }
  ])
  return ( 
    <div className="themes">
     <div className="container">
     {themes.map((theme)=>(
        <div className="row theme-row" key={theme.id} > 
          <div className="col-lg-4 img-col" data-aos="fade-right">
            <img src= {theme.image} alt=""  className="mx-auto d-block img-fluid"/>
          </div>
          <div className="col-lg-8 theme-text" data-aos="fade-left">
            <h3>{theme.title}</h3>
            <h5>{theme.header}</h5>
            <p>{theme.p}</p>
          </div>
        </div>  
      ))}
     </div>
    </div>
   );
}
 
export default Themes;