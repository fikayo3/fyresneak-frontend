import React from 'react'
import styled from "styled-components"

const FooterContainer = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:background: #DA22FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #9733EE, #DA22FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #9733EE, #DA22FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
;
justify-content: space-around;
`
const FooterMain = styled.div`
display:flex;
flex-direction:column;
width:45%;
`
const FooterMainHead = styled.span`
font-size:3.3rem;
font-weight:bold;
margin-bottom:2em;
`
const FooterMainBody = styled.p`
font-size:1.6rem
`
const SocialIconsCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:3em;
`
const SocialIcons = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:${(props)=> props.bg};
width:50px;
height:50px;
border-radius:50%;
margin-right:2em;
`
const UsefulLinks = styled.div`
width:25%;
display:flex;
flex-direction:column;
`
const UsefulLinksHead = styled.span`
font-size:3.3rem;
font-weight:bold;
margin-bottom:1.6em;
`
const UsefulLinkBody = styled.ul`
list-style:none;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-right:2em;
`
const UsefulLinksItems = styled.li`
font-size:1.6rem;
margin-bottom: 2.3rem;
cursor:pointer;
`
const Contact = styled.div`
width: 30%;
display:flex;
flex-direction:column;
justify-content:center;
`
const ContactHead = styled.span`
font-size:3.3rem;
font-weight:bold;
margin-bottom:2em;
`
const ContactBody = styled.div`
display:flex;
margin-bottom:3em;
`
const ContactIcon = styled.img`
width:40px;
height:35px;
`
const ContactItemText = styled.span`
font-size:1.6rem;
`
const Cont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const IconC = styled.div`
margin-right:1em;
`
const Footer = () => {
  return (
    <FooterContainer>
      <FooterMain>
        <FooterMainHead>
          FYRE-SNEAKS
        </FooterMainHead>
        <FooterMainBody>
        There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </FooterMainBody>
        <SocialIconsCont>
          <SocialIcons bg={'#050576'}>
            <img src={"/icons/facebook.svg"} width="30" height="30"/>
          </SocialIcons>
          <SocialIcons bg={'#1b1beb'}>
            <img src={"/icons/twitter.svg"} width="30" height="30" />
          </SocialIcons>
          <SocialIcons bg={'#a728b7'}>
            <img src={"/icons/instagram.svg"} width="30" height="30" />
          </SocialIcons>
        </SocialIconsCont>
      </FooterMain>
      <UsefulLinks>
        <UsefulLinksHead>Useful links </UsefulLinksHead>
        <UsefulLinkBody>
          <UsefulLinksItems>Signup</UsefulLinksItems>
          <UsefulLinksItems>Login</UsefulLinksItems>
          <UsefulLinksItems>Terms</UsefulLinksItems>
          <UsefulLinksItems>Cart</UsefulLinksItems>
        </UsefulLinkBody>
      </UsefulLinks>
      <Contact>
        <ContactHead>
          CONTACT
        </ContactHead>
        <Cont>
        <ContactBody>
          <IconC>
          <ContactIcon src={"/icons/location.svg" }/> 
          </IconC>
          <ContactItemText> 35, dixie street Ireland</ContactItemText>
        </ContactBody>
        <ContactBody>
          <IconC>
          <ContactIcon src={"/icons/phone.svg"} />
          </IconC>
          <ContactItemText> +234 07056070802 </ContactItemText>
        </ContactBody>
        <ContactBody>
          <IconC>
          <ContactIcon src={"/icons/mail.svg"} />
          </IconC>
          <ContactItemText>Fikayoadele@gmail.com</ContactItemText>
        </ContactBody>
        </Cont>
      </Contact>
    </FooterContainer>
  )
}

export default Footer