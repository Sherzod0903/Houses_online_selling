import styled  from "styled-components";
import {ReactComponent as direction} from "../../asset/icons/direction.svg"
import {ReactComponent as email} from "../../asset/icons/email.svg"
import {ReactComponent as phone} from "../../asset/icons/phone.svg"
import {ReactComponent as facebook} from "../../asset/icons/facebook.svg"
import {ReactComponent as linkedin} from "../../asset/icons/linktin.svg"
import {ReactComponent as twitter} from "../../asset/icons/twitter.svg"
import {ReactComponent as instagram} from "../../asset/icons/instagram.svg"

const Container=styled.div` 
display:flex;

align-items:center;
justify-content:space-around;
margin:auto;
margin-top:100px;
/* padding:96px 130px; */
width:100%;
background: #0D263B;
/* padding:20px; */
height:417px;
width:100%;
`
const Squares=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
/* align-items:center; */
max-width:294px;
width:100%;
height:300px;
/* background-color:red; */
`



Squares.Title=styled.div`

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #fff;
`


Squares.Text=styled.div`

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color:#fff;
`
const Icons=styled.div`

`
Icons.Direction=styled(direction)`
margin-right:22px;
`
Icons.Phone=styled(phone)`
margin-right:22px;
`
Icons.Email=styled(email)`
margin-right:22px;

`
Icons.Facebook=styled(facebook)`


:hover{
    background-color:blue;
    width:20px;
    height:20px;
    border-radius:3px
}

cursor: pointer;
`
Icons.Instagram=styled(instagram)`

:hover{
    background-color:#bc2a8d	;
    width:22px;
    height:22px;
    border-radius:3px
}
cursor: pointer;
`
Icons.Linkedin=styled(linkedin)`
cursor: pointer;
:hover{
    background-color:#0077b5;
    width:22px;
    height:22px;
    border-radius:3px
}


`
Icons.Twitter=styled(twitter)`
cursor: pointer;

:hover{
    background-color:#1DA1F2;
    width:22px;
    height:22px;
    border-radius:3px
}

`

Icons.Contact=styled.div`
display:flex;

justify-content:space-between;
width:196px;
height:36px;

`



export { Container,Icons ,Squares,}