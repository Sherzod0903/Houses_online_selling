import React from "react";

import { Blur, Container,Content,Img } from "./styled";

import home2 from "../../asset/images/home2.png"





export const Readmore=()=>{ 
  
 
 


return(
  <Container>

  <Img src={home2}/>






 <Blur/>
 <Content><Content.Titile>Vermont Farmhouse With Antique Jail Is
the Week's Most Popular Home</Content.Titile>
 <Content.Button>Read more</Content.Button>
 </Content>

 </Container>
)
};
export default Readmore;