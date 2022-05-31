import React from 'react'
import Product from './product'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import axios from "axios"

const Container = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:100vh;
justify-content:space-between;
flex-wrap:wrap;
padding:20px;
margin-bottom:4em;
margin-right:2em;
`

const Products = ({cat}) => {
  const [products,setProducts] = useState([])
  const token = localStorage.getItem('token')
  
  const getProducts = async ()=> {
    try{
      
        let response = await axios.get( cat ?
          `http://localhost:5000/api/v1/product/pro/all?Category=${cat}`
          :`http://localhost:5000/api/v1/product/pro/all`,{
          headers:{
            'x-auth-token':token
          }
        })
        setProducts(response.data)
      }
    catch(err){
  
    }
  }
  useEffect(()=>{
    getProducts()
  },[cat])
  
  return (
    <div>
      <Container>
        {products.map((item)=> (
            <Product item={item} key={item._id} />
        ))}
        </Container>
    </div>
  )
}

export default Products