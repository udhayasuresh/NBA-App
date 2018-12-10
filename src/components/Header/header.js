import React from 'react';
import style from  './header.css';
import SideNav from '.././Header/SideNav/sideNav';
import {Link} from 'react-router-dom';

import FontAwesome  from 'react-fontawesome';
const Header = (props) => {

    let navBars = () =>(
        <div className={style.bars}>
          <FontAwesome name="bars" onClick={props.onOpenNav}/>
        </div>
    )

      let logo = () =>(
          <Link to ="/" className={style.logo}>
          Menu
            {/*<img alt="viari logo" src="https://v1924.viari.in/media/images/default/logo_1.png" />*/}
          </Link>
      )
 
        
        return(
            <div className={style.header}>
            <SideNav {...props}/>
            <header className={style.headerOpt}>
                  {navBars()}
                  
                  {logo()}
            </header>
            </div>
        )
    
}
export default Header;