import React from 'react'
export default function Navigation(){
    return(
        <div>
            <nav>
                <ul className="menu">
                    <li><a className='active' href='#home'>Home</a></li>
                    <li><a href='#news'>News</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
// export default function Navigation() {
//   const { theme, toggle, dark } = useContext(ThemeContext);
//   return (
//     <div>
//       <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="navigator-container">
//         <ul>
//           <li><a className="active" href="#home">Home</a></li>
//           <li><a href="#news" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>News</a></li>
//           <li><a href="#about" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>About</a></li>
//           <li><a href="#contact" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Contact</a></li>
//         </ul>
//         <div style={{ position: "relative" }}>
//           <a
//             className="switch-mode"
//             href="#a"
//             onClick={toggle}
//             style={{
//               backgroundColor: theme.backgroundColor,
//               color: theme.color,
//               outline: "none",
//             }}
//             data-testid="toggle-theme-btn"
//           >
//             Switch Nav to {dark ? "Dark" : "Light"} mode
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// import React from "react";
// import {Link} from 'react-router-dom';
// import {Navbar, NavItem, Icon} from 'react-materialize';

// export default function Navigation(){
//   <Navbar className="menu" 
//     alignLinks='right' 
//     brand={<span className="brand-logo">Player Cards</span>}
//     id="mobile-nav"
//     menuIcon={<Icon>menu</Icon>}>
//     <ul>

//     </ul>
//   </Navbar>
// }