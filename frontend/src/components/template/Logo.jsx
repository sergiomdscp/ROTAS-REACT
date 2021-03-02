import React from 'react'
import './Logo.css'
import logo from '../../assets/imags/LPM.jpg'
import {Link} from 'react-router-dom'


export default props =>
<aside className="logo">
    <Link to ="/" className="logo">
       <img src={logo} alt="logo"/>
    </Link>
</aside>