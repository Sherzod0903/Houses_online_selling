import React,{useRef}from "react";
import { Carousel } from 'antd';
import { Arrow, Blur, Container,Content,Img } from "./styled";
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
<Content><Content.Titile>Skyper Pool Partment</Content.Titile>

<Content.Desc >112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>

<Content.Price>$5,250/month</Content.Price>
</Content>
    <Arrow onClick={onMove}  data-name='left' left="true"  />
<Arrow onClick={onMove}  data-name='right'    />
</Container>
)
};
export default GenCarusel;