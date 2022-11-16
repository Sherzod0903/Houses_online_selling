import styled  from "styled-components";








const Container=styled.div` 
position:relative; 
/* max-height:571px;   */
height:fit-content;
/* width:100%; */



`



 const Img=styled.img `
 /* position:absolute; */
 width:100%;
 /* height:fit-content; */

`
const Blur=styled.div`
position: absolute; 
top:0 ;
bottom:0;
left:0;
right:0;
background:rgba(0,0,0,0.2);
`
const Content=styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
Content.Titile=styled.div`
display:flex;
align-items:center;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 48px;
letter-spacing: -0.02em;
margin:20px 0px;
color: #FFFFFF;
max-width:566px;
width:100%;
height:70px;
`

Content.Button=styled.button`
/* margin-top:70px; */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 40px;
gap: 10px;
background: #0061DF;
border-radius: 2px;
border:none;
cursor: pointer;
:active{
  transform:scale(0.97);

}

`
export { Container,Img ,Blur,Content }