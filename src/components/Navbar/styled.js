import { NavLink } from "react-router-dom";
import styled  from "styled-components";
import   {ReactComponent as logoImg} from '../../asset/icons/logo.svg'


const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;

`
const Main=styled.div`
display:flex;
justify-content:center;
background:var(--colorPrimary);

`

const Wrapper=styled.div`
display:flex;
align-items:center;
justify-content:space-between;


color:#ffff;
padding:var(--padding);
height: 64px;
font-size:16px;
width:100%;
max-width:1440px;

`
 const Section=styled.div`
 display:flex;
align-items:center;
justify-content:space-between;
cursor: ${({logo})=>logo&&'pointer'};

.active{
    color:burlywood;
}
 
 ` 
const Logo=styled(logoImg)`
width: 30px;
margin-right:12px;
& path {
    fill:white; 
}
`

const Link=styled(NavLink) `
text-decoration:none;
padding:0px 32px;
color:#ffff;
`
export{ Container,Main,Wrapper,Section,Logo,Link };