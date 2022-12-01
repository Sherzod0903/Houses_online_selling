import styled  from "styled-components";






const Container=styled.div` 
display:flex;
justify-content:center;
align-items:center;
width:100%;
background: #F5F7FC;
height:600px;
`

const Content=styled.div`
display:flex;
flex-direction:column;
justify-content:center;

width:100%;
max-width:580px;


gap:25px;
background-color:white;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding:30px;
margin:64px;
`


export { Content,Container}