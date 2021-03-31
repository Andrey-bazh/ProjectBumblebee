import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container=styled.div`
min-height: 700px;
position: fixed;
bottom: 0;
left: 0;
top: 0;
right: 0;
z-index: 0 ;
overflow: hidden;
background: #00adf8;
`
export const FormWrap=styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 450px){
height: 80%;
}
`
export const Icon=styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #ffdf1f;
font-size: 32px;
@media screen and (max-width: 480px){
margin-left: 15px;
margin-top: 10px;
}
`
export const FormContent=styled.div`
height: 100#;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 480px){
padding: 10px;
}
`
export const Form=styled.form`
background: #000000;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 30px;
border-radius: 5px;
box-shadow: 0 2px 100px #ffde00;
@media screen and (max-width: 400px)  {
padding: 32px 32px;
}
`
export const FormH1=styled.h1`
margin-bottom: 40px;
color:#fff;
font-size: 20px;
text-align: center;
`

export const FormLabel=styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;

`
export const FormInput=styled.input`
padding: 15px 15px ;
margin-bottom: 30px;
border: none;
border-radius: 5px;

`

export const FormButton=styled.button`
background: #fdde09;
padding: 15px 0;
border: none;
border-radius: 5px;
color: #000000;
font-size: 20px;
cursor: pointer;
`