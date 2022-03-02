import "animate.css";
import Aos from "aos"; 
import "aos/dist/aos.css";
import 'material-icons/iconfont/material-icons.css';

import { useEffect } from "react";

import Homepage from "./HomePage";
import About from "./About";
import Themes from "./Themes";
import Timeline from "./Timeline";
import Guidelines from "./Guidelines";
import Judges from "./Judges";

function App() {
  useEffect(()=>{
    Aos.init({
      duration:1000
    });
  })
  return (
    <div className="App">
      <Homepage/>
      <About/>
      <Themes/>
      <Timeline/>
      <Guidelines/>
      <Judges/>
    </div>
  );
}

export default App;
