import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'
import Logo from '../components/template/Logo'

import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'
import {HashRouter} from 'react-router-dom'
import Routes from './Routes'

export default props =>
<HashRouter>
<div className="app">
    <Logo />
     <Routes />
    <Nav />
    <Footer />
</div>

</HashRouter>