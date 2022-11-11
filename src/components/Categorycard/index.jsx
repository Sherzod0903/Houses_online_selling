

import React from "react";

import noimage from '../../asset/images/nimage.png'
import category from '../../asset/images/category.png'


import { Container, Content, Img,Icons, Blur} from "./styled";

export const CategoryCard=({data={}})=>{ 
  const {name} =data;
  console.log(data);

return(
 <Container>

  <Img src={category||noimage}/>
  <Blur/>
  <Content>
  {name||'Category name'}
</Content>
 </Container>
)
};
export default CategoryCard;