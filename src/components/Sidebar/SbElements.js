import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer=styled.aside`
  position: fixed;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top:0;
  left:0;
  transition: 0.5s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '10%')};
  top:${({isOpen}) => (isOpen ? '0' : '-100%')} 
 
`
export const CloseIcon=styled(FaTimes)`
color:#fcfcfc;
`

export const Icon=styled.div`
position: absolute;
top:1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper= styled.div`
color:#fff;

`

export const SidebarLink=styled(LinkS)`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.4s ease-in-out;
text-decoration: none;
cursor: pointer;
&:hover{
color:blueviolet;
transition: 0.4s ease-in-out;
}

`

export const SideBtnWrap=styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute=styled(LinkR)`
border-radius: 40px;
background: blueviolet;
white-space: nowrap;
  padding: 15px 65px;
  color: #000000;
  font-size: 16px;
  outline: none;
  border: none;
   cursor: pointer;
   transition: all 0.4s ease-in-out;
   text-decoration: none;
   &:hover{
   transition: all 0.4s ease-in-out;
   background: #fa9af0;
   color: #e7dc0c;
   }
`
export const SidebarMenu=styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align: center;

@media screen and (max-width: 480px){
grid-template-rows: repeat(6,60px);
}
`