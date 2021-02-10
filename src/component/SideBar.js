import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './logo.jpg'
function SideBar() {
    return(
        <Sidebar>
            <Logo > <img src={logo}/></Logo>
            <Wrapper>               
                <Link to='/home'><i className="icon fa fa-home fa-2x"/><b className="sidebar-text">Home</b></Link>
                <Link to='/about'><i className="icon fa fa-coffee fa-2x"/><b className="sidebar-text">About</b> </Link>
                <Link to='/projects'><i className="icon fa fa-code fa-2x"/><b className="sidebar-text">Projects</b></Link>
                <Link to='/contact'><i className="icon fa fa-comment fa-2x"/><b className="sidebar-text">Contact</b></Link>
            </Wrapper>
        </Sidebar>

    )
}

export default SideBar

const Sidebar = styled.div `
margin-top:5vh;
width: 9.9vw;
height:100vh;
float:left;
color: white;
@media only screen and (max-width:760px){
    h3{
        display: none;
    }
}

`

const Logo = styled.div `
img{
width:8vw;
heigt:6vh;
}
`

const Wrapper =  styled.div`
margin-top: 25vh;
display:flex;
flex-direction: column;
padding:10px;
transition: all .2s ease-in-out;

 a {
  font-family: FontAwesome;
  color:#eee;
  opacity: 0.6;
  font-size:22pt;
  text-decoration: none;
  display: block;
  padding:15px;
}
b {
  transition: all .2s ease-in-out !important;
  display: none;
}h3 {
  display: none;
}

a:hover {
\  color: #fff;
}
 a:hover i {
  display: none;
}
 a:hover b {
  opacity: 0.6;
  display: block;
}



`
