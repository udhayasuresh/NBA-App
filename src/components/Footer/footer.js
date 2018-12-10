import React from 'react';
import style from './footer.css';
import {Link} from 'react-router-dom';
const Footer = () =>{
    return(
        <div className={style.footer}>
        
            <div>
                <Link to="/">
               @ 2018 all reserve
                </Link>
            </div>
            </div>
    )
}

export default Footer;