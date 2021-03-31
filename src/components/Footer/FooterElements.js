import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const FooterContainer=styled.footer`
background-color:#e7dd98 ;
`
export const FooterWrap=styled.div`
padding: 35px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`
export const FooterLinksContainer=styled.div`
display: flex;
justify-content: center;
@media screen and (max-width: 800px){
padding-top:20px ;

}
`
export const FooterLinksWrapper=styled.div`
display: flex;
@media screen and (max-width: 800px){
flex-direction: column;
}
`

export const FooterLinkItems=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 15px;
text-align: left;
width: 150px;
box-sizing: border-box;
color:#1e53dc; 
 
 @media screen and (max-width: 420px){
 margin: 0;
 padding: 10px;
 width:100%;
 }
`
export const FooterLinkTitle=styled.h1`
font-size: 15px;
margin-bottom: 15px;

`
export const FooterLink=styled(Link)`
color: #f36161;
text-decoration: none;
margin-bottom: 0.5rem;
 font-size: 15px;
 
 &:hover{
 color:rgba(111,170,31,0.88);
 transition: 0.2s ease-out;
 
 }
`

export const SocialMedia=styled.section`
max-width: 1000px;
width: 100%;

`

export const SocialMediaWrap=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin:40px auto 0 auto;
@media screen and (max-width: 820){
flex-direction: column;
}
`
export const SocialLogo=styled(Link)`
color: #030c01;
justify-self: start;  
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 15px;
font-weight: bold;
@media screen and (max-width: 370px){
display: none;
`

export const WebsiteSave=styled.small`
color: #2b220c;
margin-bottom: 15px;
@media screen and (max-width: 370px){
display: none;
}
`

export const SocialIcons=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const SocialIconLink=styled.a`
color: #000000;
font-size: 24px;
@media screen and (max-width: 370px){
justify-content: center;

`