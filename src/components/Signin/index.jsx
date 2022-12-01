import React,{ }from "react";

import {  Container,Content} from "./styled";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";

 
export const Signin=()=>{ 

const navigate=useNavigate();

return(
  <Container>
    <Content>
<div className="subTitle">Sign in</div>
<Input placeholder="email"> </Input>
<Input placeholder="password"> </Input>
<Button width='%'>Login</Button>
    </Content>
</Container>
)
};
export default Signin;














