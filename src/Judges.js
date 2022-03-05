import { useState } from "react";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./Judges.scss";

const Judges = () => {
  const [judges, setJudges] = useState([
    {img:"images/c1.png",name:"Ann Marry", job:"Annimator", desc:"self motivated designer", link1:"", link2:"", link3:"", id:1},
    {img:"images/c2.png",name:"Ann Marry", job:"Annimator", desc:"self motivated designer", link1:"", link2:"", link3:"", id:2},
    {img:"images/c3.png",name:"Ann Marry", job:"Annimator", desc:"self motivated designer", link1:"", link2:"", link3:"", id:3},
    {img:"images/c1.png",name:"Ann Marry", job:"Annimator", desc:"self motivated designer", link1:"", link2:"", link3:"", id:4},
    {img:"images/c2.png",name:"Ann Marry", job:"Annimator", desc:"self motivated designer", link1:"", link2:"", link3:"", id:5},

  ])

  
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite:true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
        }
    },
      {
          breakpoint: 920,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
          }
      },
      {
          breakpoint: 700,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
          }
      }
  ]

  };
  
  return(
  <div className="judges">
    <div className="container" data-aos="fade-up">
      <h1>PANNEL OF <span style={{color:"gold"}}>JUDGES</span></h1>
      <Slider {...settings}> 
        {judges.map((judge)=>(
          <div className= "card" key={judge.id}>
           <div className="card-body">
           <div className="judge-img">
              <img src={judge.img} alt="" className="mx-auto d-block img-fluid"/>
            </div>
            <div className="judge-text">
              <h6>{judge.name}</h6>
              <p>{judge.desc}</p>
            </div>
           </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  )
}
 
export default Judges;