import "./Homepage.scss";
import Navbar from "./Navbar";

const Homepage = () => {
  return ( 
    <div className="homepage">
      <Navbar/>
      <div className="heading">
        <h1><span style={{color: "gold"}}>SEDS</span> SPACE ART 2<span style={{color: "gold"}}>k</span>22</h1>
        <h3>Registration Open</h3>
        <hr style={{width: "20%", size : "50px"}}/>
        <button className="btn btn-outline-warning">Submit now</button>
      </div>
    </div>
   );
}
 
export default Homepage;