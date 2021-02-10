import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
        <span> Bod</span>
            <Wrapper>
            <TextBox>
                 
                <h1>Hi,
                <br/>We Are Team Cypher,
                
                <br/>web developers.</h1>

                <h4>Full Stack Developers</h4>
                
                </TextBox>
            </Wrapper>
        
        </Container>
    )
}

export default Home

const Container = styled.div `
width:88vw;
background-color: black;
height:100vh;
float:right;

`
const Wrapper = styled.div `
display: flex;
flex-direction: coloum;

`
const TextBox = styled.div `
width:40vw;
height: 40vh;
float:left;
margin-left: 30px;
margin-top:40vh;
color: #ffff;
h1{     
    
    font-weight: 700;
    font-family: font-file-82132;
    
    font-size: 40px;
}

`