import React,{ useEffect, useState }from "react";

import {  Container,Content} from "./styled";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequest from "../../hook/useRequest";
 
export const Signin=()=>{ 
const [body,setBody]=useState({
  email:'',
  passwor:'',
});
const navigate=useNavigate();
const request=useRequest();

useEffect(()=>{
  request({url:`/public/auth/login`,body:{}})
},[])

const onChange=()=>{

}
return(
  <Container>
    <Content>
<div className="subTitle">Sign in</div>
<Input onChange={onChange} placeholder="email" type="email"> </Input>
<Input onChange={onChange} placeholder="password" type="password"> </Input>
<Button width='%'>Login</Button>
    </Content>
</Container>
)
};
export default Signin;














