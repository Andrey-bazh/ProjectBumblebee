import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav =styled.nav`
//background:linear-gradient(#FDC830, #F37335);
background: ${({scrollNav})=>(scrollNav?'linear-gradient(#FDC830, #F37335)':'transparent')};
height:80px;
margin-top:-80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){
 transition:0.8s all ease;
}
`
export const NavbarContainer = styled.div `
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;

`
export const ImgLogo=styled.img`
max-width: 50px;
max-height: 50px;
`
export const NavLogo=styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 40px ;
font-weight: bold;  
text-decoration: none;
max-width: 50px;
max-width: 50px;
`
export const MobileIcon = styled.div`
display: none ;
@media screen and (max-width: 768px){
display: block;
position: absolute;
top:0;
right: 0;
transform: translate(-100%,60%);
font-size: 1.8rem;
cursor: pointer;
color: #ffb61e;
}
`

export const NavMenu=styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
display: none;
}
`
export const NavItem=styled.li`
height: 80px;
`
export const NavLinks=styled(LinkScroll)`
color: #0e0000;
display: flex;  
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: large;
&:active{
border-bottom: 7px solid #000000;
}
`

export const NavBtn=styled.nav`
display: flex;
align-items: center;
@media screen and (max-width: 768px){
display: none;
}
`
export const NavBtnLink=styled(LinkR)`
border-radius: 50px;
background: #1f1406;
white-space: nowrap;
padding: 10px 22px ;
color:gold;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.4s ease-in-out;
text-decoration: none;
 &:hover{
 transition: all 0.6s ease-in-out;
 background: #fff;
 color:#030301;
 }

`