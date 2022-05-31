import React from 'react'
import styled from "styled-components";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Container = styled.div`
height:55px;
width:100vw;
box-shadow: 6px 13px 36px -21px rgba(20,19,19,1);
-webkit-box-shadow: 6px 13px 36px -21px rgba(20,19,19,1);
-moz-box-shadow: 6px 13px 36px -21px rgba(20,19,19,1);
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
`
const Iconcontainer = styled.div`

`
const Navcenter = styled.div`

`
const Cartcontainer = styled.div`
display:flex;
position:relative;
margin-right:2em;
cursor:pointer;
&:hover{
    transform:scale(1.1)
}
`
const Navtext = styled.span`
font-size:2.4rem;
color:#151736;
font-family: 'Rubik Glitch', cursive;
font-weight: bold;
`

const Navnum = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;
border-radius:50%;
width:30px;
height:25px;
color:#ffffff;
background-color:grey;
`

const Navbar = () => {
    const cartno = useSelector((state)=> state.cart.count)
  return (
    <Container>
        <Wrapper>
            <Iconcontainer>
                <img src={`/icons/sneak.png`} width="50" height="50"/>
            </Iconcontainer>
            <Navcenter>
                <Navtext> FYRE-SNEAKS </Navtext>
            </Navcenter>
            <Link to={"/cart"}>
            <Cartcontainer>
                <img src={`/icons/cart.svg`} width="40" height="35" />
                <Navnum>{cartno}</Navnum>
            </Cartcontainer>
            </Link>
            
        </Wrapper>
    </Container>
  )
}

export default Navbar