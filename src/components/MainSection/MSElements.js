import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/all";


export const MainContainer=styled.div`
  background: #39056c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  
  :before{
  content:'';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(
  180deg,
  rgb(0,0,0,0.1),0%,
  rgb(0,0,0,0.8),100%),
  linear-gradient(180deg,rgb(0,0,0,0.2) 0%,transparent 100%);
  
  z-index:2;
  }
`

export const MainBg=styled.div`
position: absolute;
top:0;
 right:0;
 left: 0; 
 bottom: 0;
 width: 100%;
 height: 100%;
 overflow: hidden;

`
export const VideoBg=styled.video`

width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background:cornflowerblue;
`

export const MainContent=styled.div`
position: absolute;
max-width: 1200px;
z-index: 3;
padding: 10px 25px;
display: flex;
flex-direction: column;
align-items: center;
`

export const MainH1=styled.h1`
color: white  ;
font-size: 50px;
text-align: center;
 
  @media screen and (max-width: 768px){
  font-size: 40px;
  }
  @media screen and (max-width: 480px){
  font-size: 30px;
  }
`

export const MainP=styled.p`
 margin-top: 25px;
 color:white;
 font-size: 28px;
 text-align: center;
 max-width: 550px;
 
  @media screen and (max-width: 768px){
  font-size:  25px;
  }
  @media screen and (max-width: 480px){
  font-size: 20px;
  }

`
export const MainBtnWrapper=styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`

export const ArrowForward=styled(MdArrowForward)`
min-height: 50px;
min-width: 50px;
margin-left: 8px;
font-size: 30px;

`
export const ArrowRight=styled(MdKeyboardArrowRight)`
min-height: 50px;
min-width: 50px;
margin-left: 8px;
font-size: 30px;
`