import styled from 'styled-components'
export const OtherContainer=styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #eca8a8;

@media screen and (max-width: 768px) {
height: 1100px;
}
@media screen and (max-width: 480px) {
height: 1300px;
}
`
export const OtherH1=styled.h1`
font-size: 2rem;
color:#e54141;
margin-bottom: 60px;
@media screen and (max-width: 480px){
font-size: 1.5rem; 
`
export const OtherWrapper=styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 15px;
padding: 0 50px;

@media screen and (max-width: 1000px){
grid-template-columns: 1fr 1fr;

@media screen and (max-width: 768px){
grid-template-columns: 1fr ;
padding: 0 20px;
}

`
export const OtherCard=styled.div`
background: #fff;
display: flex; 
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 20px;
min-height: 340px;
padding: 30px;
box-shadow: 2px 2px 10px rgba(255,216,0,0.7);
transition: all 0.2s ease-in-out;
&:hover{
transform: scale(1.1);
transition: all 0.7s ease-in-out;
box-shadow: -5px 10px 50px 10px rgba(0,250,172,0.7);
cursor: pointer;
}
`
export const OtherIcon=styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`
export const OtherH2=styled.h2`
font-size: 1rem;
margin-bottom: 10px;

`
export const OtherP=styled.p`
font-size: 1rem;
text-align: center;

`
