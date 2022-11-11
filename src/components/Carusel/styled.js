import styled  from "styled-components";
import { ReactComponent as arrow2 } from "../../asset/icons/arrow2.svg";







const Container=styled.div` 
position:relative;

height:fit-content;



`
const Arrow=styled(arrow2)`
position:absolute;
top:50%;
width:30px;
height:30px;
border-radius:50%;
padding:20px;
color:rgb(0,0,0,0.3);
background: rgba(225,225,225,0.2);
transform:${({left})=>(!left?'left':'rotate(180deg)')};
left: ${({left})=>left &&'20px'};
right: ${({left})=>!left &&'20px'};
cursor: pointer;
:hover{
  opacity:0.7
}

`
 const Img=styled.img`
width:100%;


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
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;

letter-spacing: -0.02em;
margin:20px 0px;

color: #FFFFFF;
`
Content.Desc=styled.div`

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


color: #FFFFFF;

`
Content.Price=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
margin-top:20px;
letter-spacing: -0.02em;

color: #FFFFFF;
`
export { Container,Arrow,Img ,Blur,Content }