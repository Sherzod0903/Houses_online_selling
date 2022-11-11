

import React from "react";

import noimage from '../../asset/images/nimage.png'
import category from '../../asset/images/category.png'


import { Container, Content, Img, Blur} from "./styled";

export const CategoryCard=({onClick,data={}})=>{ 
  const {name} =data;
  console.log(data);

return(
 <Container onClick={onClick}>
  <Img src={category||noimage}/>
  <Blur/>
  <Content>
  {name||'Category name'}
</Content>
 </Container>
)
};
export default CategoryCard;