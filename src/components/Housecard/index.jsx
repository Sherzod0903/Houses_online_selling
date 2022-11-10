

import React from "react";

import noimage from '../../asset/images/nimage.png'

import { Container, Content, Details, Img,Icons ,Divider} from "./styled";


export const HomeCard=({url,title,bed,bath,garage,ruler,info})=>{ 
 

return(
 <Container>
  <Img src={url|| noimage}/>
  <Content>
  <div className="subTitle" >{title||'New Apartment Nice Wiew'}</div>
  <div className="info">{info||'Quincy St, Brooklyn, NY, USA'}</div>
  <Details>
    <Details.Item><Icons.Bed/><div className="info">{bed||'Bed 1'}</div></Details.Item>
    <Details.Item><Icons.Bath/><div className="info">{bath||'Bath 1'}</div></Details.Item>
    <Details.Item><Icons.Garage/><div className="info">{garage||'Garage 1'}</div></Details.Item>
    <Details.Item><Icons.Ruler/><div className="info">{ruler||'Ruler 1'}</div></Details.Item>


  </Details>
  </Content>
  <Divider/>
  <Content footer><Details.Item>
    <div style={{ textDecoration: "line-through" }
   
    } className="info">$2,800/mo</div>
    <div className="subTitle" >{title||'$7,500/mo'}</div>
    </Details.Item>
  <Details.Item foot><Icons.Resize/><Icons.Love/></Details.Item></Content>
 </Container>
)
};
export default HomeCard;