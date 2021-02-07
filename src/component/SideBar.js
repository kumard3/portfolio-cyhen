import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt'
import {Youtube} from '@styled-icons/boxicons-logos/Youtube'
import {Contacts} from '@styled-icons/material-rounded/Contacts'
function SideBar() {
    return(
        <Sidebar>
            <Wrapper>
               
                <Link to='/home'><Home className="home-div"/> </Link> <h3 className="text-home">Home</h3>
                <Link to='/about'><About/> </Link><h3>About </h3>
                <Link to='/projects'><PRojects/></Link><h3>Works</h3>
                <Link to='/contact'><COntact/></Link><h3>Contact Us</h3>
            </Wrapper>
        </Sidebar>

    )
}

export default SideBar

const Sidebar = styled.div `
margin-top:5vh;
width: 9.9vw;
height:90vh;
float:left;
border-right: .1px solid white;
color: white;
@media only screen and (max-width:760px){
    h3{
        display: none;
    }

}
`
const Home = styled(HomeAlt)`
display:flex;
margin-top:30px;
width:50px;
color: white;
@media(max-width:760px)
{
 width:45px;
}
@media(min-width:760px)
{
  width:30px;
}@media(min-width:766px)
{
  margin-top:25px;
  width:25px;
}
@media screen and (min-width:1080px) and(max-height:500px){
  margin-top:20px;
  width:30px;
}
@media screen and (min-width:300px) and (max-height:500px){
  width:25px;
}
@media screen and (min-width:300px) and (min-height:500px){
  width:25.8px;
}
@media(min-height:600px){
  margin-top:6vh;
}
@media (min-height:700px){
  margin-top:8vh;
  
}
@media(min-height:800px){
  margin-top: 10vh;
}
@media(min-height:900px){
  margin-top: 12vh;
}@media(min-height:1000px){
  margin-top: 14vh;
}

`

const PRojects = styled(Youtube)`
display:flex;
margin-top:55px;
width:50px;
color: white;

@media(max-width:760px)
{
 width:45px;
}
@media(min-width:760px)
{
  width:30px;
}
@media(min-width:766px)
{
  margin-top:25px;
  width:25px;
}
@media(min-height:600px){
  margin-top:20px;
}
@media (min-height:700px){
  margin-top:30px;
}
@media(min-height:800px){
  margin-top: 50px;
}
@media(min-height:900px){
  margin-top: 60px;
}@media(min-height:1080px){
  margin-top: 70px;
}
@media screen and (min-width:1080px) and(max-height:500px){
  margin-top:20px;
  width:30px;
}
@media screen and (min-width:300px) and (max-height:500px){
  width:25px;
}
@media screen and (min-width:300px) and (min-height:500px){
  width:25.8px;
}
`
const About = styled(Contacts)`
margin-top:55px;
width:50px;
color: white;

@media(max-width:760px)
{
 width:45px;
}
@media(min-width:760px)
{
  width:30px;
}
@media(min-width:766px)
{
  margin-top:25px;
  width:25px;
}
@media(min-height:600px){
  margin-top:20px;
}
@media (min-height:700px){
  margin-top:30px;
}
@media(min-height:800px){
  margin-top: 50px;
}
@media(min-height:900px){
  margin-top: 60px;
}@media(min-height:1080px){
  margin-top: 70px;
}
@media screen and (min-width:1080px) and(max-height:500px){
  margin-top:20px;
  width:30px;
}
@media screen and (min-width:300px) and (max-height:500px){
  width:20px;
}
@media screen and (min-width:300px) and (min-height:500px){
  width:25.8px;
}
`
const COntact = styled(Contacts)`
display:flex;
margin-top:55px;
width:50px;
color: white;

@media(max-width:760px)
{
 width:45px;
}
@media(min-width:760px)
{
  width:30px;
}
@media(min-width:766px)
{
  margin-top:25px;
  width:25px;
}
@media(min-height:600px){
  margin-top:20px;
}
@media (min-height:700px){
  margin-top:30px;
}
@media(min-height:800px){
  margin-top: 50px;
}
@media(min-height:900px){
  margin-top: 60px;
}
@media(min-height:1080px){
  margin-top: 70px;
}
@media screen and (min-width:1080px) and(max-height:500px){
  margin-top:20px;
  width:30px;
}
@media screen and (min-width:300px) and (max-height:500px){
  width:20px;
}
@media screen and (min-width:300px) and (min-height:500px){
  width:25.8px;
}
`


const Wrapper =  styled.div`
display:flex;
flex-direction: column;
padding:10px;

`
