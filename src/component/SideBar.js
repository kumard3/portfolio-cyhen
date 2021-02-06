import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
function SideBar() {
    return (
        <Sidebar>
        <Link to='/home'><Home /> </Link> <h3>Home</h3>
        <Link to='/about'><AboutUs/> </Link><h3>Youtube</h3>
        <Link to='/projects'><Projects/></Link><h3>Works</h3>
        <Link to='/contact'><Contact/></Link><h3>Contact Us</h3>
        </Sidebar>
    )
}

export default SideBar

const Sidebar = styled.div `
width: 9.9vw;
height:100vh;
float:left;
`
