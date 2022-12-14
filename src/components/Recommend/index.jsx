import React,{ useEffect,useState}from "react";
import { useNavigate } from "react-router-dom";
import {  Container } from "./styled";
import Slider from 'react-slick';
// import CategoryCard from "../Categorycard";
import HomeCard from "../Housecard";

const {REACT_APP_BASE_URL:url}=process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  arrows: true,
  adaptiveHeight: true,
  speed: 500,
  dots:true,
  appendDots: (dots) => <ul>{dots}</ul>
}

export const CategoryCarusel=()=>{ 
 const [data,setData]=useState([]);
 const navigate =useNavigate();
  useEffect(()=>{ 
    fetch(`${url}/houses/list` )
    .then((res)=>res.json())
    .then((res)=>{
       setData(res?.data ||[])
    });},[]);

return(
  <Container>
    <Container.Title>Recommend</Container.Title>
    <Container.Text>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Container.Text>

  <Slider {...settings}>
{data.map((value)=>{
  return <HomeCard key={value.id} onClick={() => navigate(`/properties?category_id=${value.id}`)} data={value} />
})}


  </Slider>
</Container>
)
};
export default CategoryCarusel;














