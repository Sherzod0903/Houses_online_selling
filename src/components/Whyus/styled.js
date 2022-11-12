import styled  from "styled-components";
import {ReactComponent as icon1} from "../../asset/icons/smile.svg"
import {ReactComponent as icon2} from "../../asset/icons/whyhome.svg"
import {ReactComponent as icon3} from "../../asset/icons/finance.svg"
import {ReactComponent as icon4} from "../../asset/icons/neighbor.svg"






const Container=styled.div` 
display:flex;
position:relative;
flex-direction:column;
margin-top:88px;
padding:96px 130px;

width:100%;
background: #F5F7FC;
padding:20px;
height:430px;
/* padding:48px; */


`
Container.Title=styled.div`
display:flex;
justify-content:center;
align-items:center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
/* identical to box height, or 129% */
margin-top:30px;
text-align: center;
letter-spacing: -0.02em;


color: #0D263B;
`

Container.Text=styled.div`
display:flex;
justify-content:center;
align-items:center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin:8px 0 30px 0;
/* identical to box height, or 150% */


/* text/2 */

color: #696969;
`
// const Square=styled.div`
// /* display:flex;
// justify-content:center;
// align-items:center;
// background-color:red; */

// `
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
justify-content:space-evenly;
align-items:center;

width:300px;
height:250px;
margin-bottom:48px;




`
Squares.Title=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
text-align: center;
color: #0D263B;`

Squares.Text=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;`
const Icons=styled.div`

`

Icons.Icon1=styled(icon1)`
display:flex;

justify-content:center;
align-items:center;
`

Icons.Icon2=styled(icon2)``
Icons.Icon3=styled(icon3)``
Icons.Icon4=styled(icon4)``

export { Container,Icons ,Squares,}