// import React from 'react'
// export default function Navigation(){
//     return(
//         <div>
//             <nav>
//                 <ul className="menu">
//                     <li><a className='active' href='#home'>Home</a></li>
//                     <li><a href='#news'>News</a></li>
//                     <li><a href='#about'>About</a></li>
//                     <li><a href='#contact'>Contact</a></li>
//                 </ul>
//             </nav>
//         </div>
//     )
// }
import React from "react";
import {Navbar, Icon, Link} from 'react-materialize'

export default function Navigation() {
 
  return (
    <Navbar
      className="menu"
      brand={<span className="brand-logo">Player Cards</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <ul className="link-boxes">
        <li>
          <Link to="/">
            <Icon left>home</Icon>Home
          </Link>
        </li>
        <li to="/about">
          <Link to="/about">
            <Icon left>info</Icon>About
          </Link>
        </li>
        <li to="/news">
          <Link to="/news">
            <Icon left>dvr</Icon>News
          </Link>
        </li>
        <li href="/contact">
          <Link to="/contact">
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
