import React from 'react'
import styled from "styled-components"
import { Cate } from '../data'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
margin-bottom:10em;
`
const CategoryHeading = styled.h1`
font-size : 2.5rem;
font-wieght:bold;
color:black;
margin-bottom:1.5em;
margin-top:1.5em;
font-family: 'Russo One', sans-serif;
`
const CategoryContainer = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
text-align:center;
margin-bottom:4em;
`
const CategoryLink = styled(Link)`
width:30%;
list-style:none;
&:hover{
  transform:scale(1.1);
}
`
const Category = styled.div`
height:25em; 
border-radius:5px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
object-fit:cover;
position:relative;
box-shadow: 0px 0px 11px 0px rgba(20,19,19,0.79);
-webkit-box-shadow: 0px 0px 11px 0px rgba(20,19,19,0.79);
-moz-box-shadow: 0px 0px 11px 0px rgba(20,19,19,0.79);
`
const Categorytext = styled.h1`
font-size:2.2rem;
color:black;
font-weight:bold;
font-family: 'Russo One', sans-serif;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
position:absolute;
top:0;
left:0;
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Categories = () => {
  return (
    <Wrapper>
    <CategoryHeading>Categories</CategoryHeading>
    <CategoryContainer>
        {Cate.map((item)=>(
           <CategoryLink to={"/productsPage/" + item.cat}>
          <Category  key={item.id}>
              <Image src={item.img} />
            <Info>
            <Categorytext>{item.title}</Categorytext> 
            </Info>
            </Category>
            </CategoryLink>
        ))}
        
    </CategoryContainer>
    </Wrapper>
  )
}

export default Categories