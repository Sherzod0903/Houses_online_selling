

import React from "react";

import noimage from '../../asset/images/nimage.png'

import { Container, Content, Details, Img,Icons ,Divider,
} from "./styled";

export const HomeCard=({data={}})=>{ 
  const {city,country,description,
price,address,attachments,salePrice,houseDetails
} =data;
  console.log(data);

return(
 <Container>
  <Img src={(attachments && attachments[0]?.imgPath)|| noimage}/>
  <Content>
  <div className="subTitle inline" >{city} {country} {description}</div>
  <div className="info">{address}</div>
  <Details>
    <Details.Item><Icons.Bed/><div className="info">Bed {houseDetails
?.beds}</div></Details.Item>
    <Details.Item><Icons.Bath/><div className="info">Bath {houseDetails
?.bath}</div></Details.Item>
    <Details.Item><Icons.Garage/><div className="info">Garage{houseDetails?.garage}</div></Details.Item>
    <Details.Item><Icons.Ruler/><div className="info">Area {houseDetails?.area} kv</div></Details.Item>


  </Details>
  </Content>
  <Divider/>
  <Content footer><Details.Item>
    <div style={{ textDecoration: "line-through" }
   
    } className="info">{salePrice}/mo</div>
    <div className="subTitle" >{price||'$7,500/mo'} </div>
    </Details.Item>
  <Details.Item foot><Icons.Resize/><Icons.Love/></Details.Item></Content>
 </Container>
)
};
export default HomeCard;