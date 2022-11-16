import styled  from "styled-components";
import {ReactComponent as direction} from "../../asset/icons/direction.svg"
import {ReactComponent as email} from "../../asset/icons/email.svg"
import {ReactComponent as phone} from "../../asset/icons/phone.svg"
import {ReactComponent as facebook} from "../../asset/icons/facebook.svg"
import {ReactComponent as linktin} from "../../asset/icons/linktin.svg"
import {ReactComponent as twitter} from "../../asset/icons/twitter.svg"
import {ReactComponent as instagram} from "../../asset/icons/instagram.svg"











const Container=styled.div` 
display:flex;
position:relative;
flex-direction:column;
margin-top:88px;
/* padding:96px 130px; */

width:100%;
background: #0D263B;
padding:20px;
max-height:430px;
height:100%;
width:100%;



`




const Squares=styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:100%;
height:300px;

background:transparent;




`
Squares.Item1=styled.div`
display:flex;
flex-direction:column; 
/* justify-content:space-evenly;
justify-content:center;
/* align-items:center; */
color:#ffff;
width:395px;
height:244px;
background-color:red;
`


Squares.Title=styled.div`
display:flex;
justify-content:center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
text-align: center;
color: #fff;

`

Squares.Text=styled.div`
display:flex;
flex-direction:column;
/* justify-content:center; */
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color:#fff;
`



const Icons=styled.div`

`
Icons.Direction=styled(direction)``
Icons.Phone=styled(phone)``
Icons.Email=styled(email)``
Icons.Facebook=styled(facebook)``
Icons.Instagram=styled(instagram)``
Icons.Instagram=styled(linktin)``
Icons.Instagram=styled(twitter)``





export { Container,Icons ,Squares,}