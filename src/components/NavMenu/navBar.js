import "./navBar.css";
import React, { useState } from 'react';
import logo from '../../images/logo_2.png';
import { Link } from 'react-scroll';
import contactImg from '../../images/image_1.png';
import SideBar from '../../images/side_bar.png'

const desktopMenuList =[ 
  {
    naveName:'Home',
    linkTo: 'intro',
  },
  {
    naveName:'About',
    linkTo: 'skills',
  },
  {
    naveName:'Services',
    linkTo: 'skills',
  },
  {
    naveName:'Media',
    linkTo: 'works',
  },
  {
    naveName:'Company',
    linkTo: 'clients',
  },
  {
    naveName:'Career',
    linkTo: 'contact',
  }]

const newdesktopMenuList = desktopMenuList.map((itemList) => {
    console.log(itemList);
    // return <h1>{itemList}</h1>
    return <Link 
      activeClass='active' 
      to={itemList.linkTo}  
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      className="desktopMenuListItem">{itemList.naveName}</Link>
});


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo of the website" className="logo"/>
        <div className="desktopMenu">
            {/* <Link className="desktopMenuListItem">{newdesktopMenuList}</Link> */}
            {newdesktopMenuList}
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img className="desktopMenuImg" src={contactImg} alt=""/>
            Contact Me!
        </button>
          {/* //mobile response side nav bar */}
        <img src={SideBar} alt="logo of the website" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        {desktopMenuList.map((item) => {
          console.log(item);
          return(
        <Link 
          activeClass='active' 
          to={item.linkTo}  
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="mobileMenuListItem">{item.naveName}
          </Link>);
          })}
        </div>
    </nav>
  )
}

export default Navbar