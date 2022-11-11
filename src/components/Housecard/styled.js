import styled  from "styled-components";
import {ReactComponent as bed} from '../../asset/icons/bed.svg'
import {ReactComponent as bath} from '../../asset/icons/bath.svg'
import {ReactComponent as garage} from '../../asset/icons/garage.svg'
import {ReactComponent as ruler} from '../../asset/icons/ruler.svg'
import {ReactComponent as resize} from '../../asset/icons/resize.svg'
import {ReactComponent as love} from '../../asset/icons/love.svg'









const Container=styled.div` 
width:100%;
max-width: 380px;
min-width: 330px;

height: 429px;

/* gap:20px; */




filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06)) drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06)) drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));

`
const Img=styled.img`
width:100%;
max-height:220px;
min-height:200px;

/* margin-bottom:24px; */
`
const Content=styled.div`
/* background:whitesmoke; */
display:flex;
flex-direction:${({footer})=>(footer?'row':'column')};
justify-content:${({footer})=>(footer&&'space-between')};

padding:0px 20px;

border-left:4px solid #E6E9EC;
border-right:4px solid #E6E9EC;
border-bottom:4px solid #E6E9EC;
`
const Details=styled.div`
display:flex;
justify-content:space-between;
margin-top:18px;
`
Details.Item=styled.div`
display:flex;
flex-direction:${({foot})=>(foot?'row':'column')};

justify-content:center;
align-items:center;


`
const Icons=styled.div`

`
Icons.Bed=styled(bed)``;
Icons.Bath=styled(bath)``;
Icons.Garage=styled(garage)``;
Icons.Ruler=styled(ruler)``;
Icons.Resize=styled(resize)``;
Icons.Love=styled(love)`
width:27px;
height:27px;
padding:6px; 
background: #F6F8F9;
border-radius:50%;
margin-left:20px;
cursor:pointer;
:active{
  transform:scale(0.9)
}
color:red;
`;



const Divider=styled.div`
background: #E6E9EC;
height:0.1px;
width:100%;

`

export { Container,Img,Content,Details,Icons,Divider}