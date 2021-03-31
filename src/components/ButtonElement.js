import styled from  'styled-components'
import {Link} from 'react-scroll'

export const Button=styled(Link)`
border-radius: 40px;
background: ${({primary})=>(primary?'#f8ff16':'#b634b6')};
white-space: nowrap;
padding: ${({big})=>(big?'15px 50px':'12px 35px')};
color: ${({dark})=>(dark?'#000000':'#030300')} ;
font-size: ${({fontBig})=>(fontBig?'25px':'20px')} ;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.5s ease-in-out;
&:hover{
transition: all 0.5s ease-in-out;
background: ${({primary})=>(primary?'#56c6f5':'#fff')};
}
  
`