import styled  from "styled-components";
import { ReactComponent as arrow } from "../../asset/icons/arrow.svg";







const Container=styled.div` 
position:relative;

height:571px;


`
const Arrow=styled(arrow)`
position:absolute;
top:66%;
width:50px;
height:50px;
padding:3px;
background: rgba(0,0,0,0.4);
transform:${({left})=>(left?'left':'rotate(-180deg)')};
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
top:0;
bottom:0;
left:0;
right:0;
width:100%;
background:rgba(0,0,0,0.3);
`



export { Container,Arrow,Img ,Blur }