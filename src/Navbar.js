import "./Navbar.scss"
const Navbar = () => {
  return ( 
     <nav className="navbar navbar-expand-sm navbar-fixed-top">
       <a href="" className="navbar-brand"></a>

       <button className="navbar-toggler" data-toggle = "collapse" data-target="#menu">
         <span className="navbar-toggler-icon"></span>
       </button> 

       <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav">
          <li className="nav-item"><a href="" className="nav-link">HOME</a></li>
          <li className="nav-item"><a href="" className="nav-link">THEME</a></li>
          <li className="nav-item"><a href="" className="nav-link">TIMELINE</a></li>
          <li className="nav-item"><a href="" className="nav-link">GUIDELINES</a></li>
          <li className="nav-item"><a href="" className="nav-link">JUDGES</a></li>
          <li className="nav-item"><a href="" className="nav-link">PRICES</a></li>
          <li className="nav-item"><a href="" className="nav-link">GALLERY</a></li>
          <li className="nav-item"><a href="" className="nav-link">CONTACT</a></li>
        </ul>
       </div>
     </nav>
   );
}
 
export default Navbar;