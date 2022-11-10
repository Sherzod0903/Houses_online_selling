import React,{useRef}from "react";
import { Carousel } from 'antd';
import { Arrow, Blur, Container,Img } from "./styled";
import home1 from "../../asset/images/home1.png"
import home2 from "../../asset/images/home2.png"





export const GenCarusel=()=>{ 
  const slider=useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
 
const onMove=({target:{ 
    dataset:{name},},
  })=>{
    if(name==='left')
    slider.current.prev();
  if(name==='right')
    slider.current.next();
  
}

return(
  <Container>
      <Carousel ref={slider} afterChange={onChange}>
<Img src={home1}/>
<Img src={home2}/>

</Carousel>
<Blur/>
    <Arrow onClick={onMove}  data-name='left'  />
<Arrow onClick={onMove}  data-name='right'   left="true " />
</Container>
)
};
export default GenCarusel;