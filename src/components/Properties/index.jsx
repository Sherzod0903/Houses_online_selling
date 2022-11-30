import React,{useEffect, useState}from "react";
import { useLocation,useNavigate } from "react-router-dom";

import HomeCard from "../Housecard";
import { Container } from "./styled";
const {REACT_APP_BASE_URL:url}=process.env;

export const Properties=()=>{
    const[data,setData]=useState([]);
    const {search}=useLocation();
    const navigate=useNavigate();
useEffect(()=>{ 
    fetch(`${url}/houses/list${search}` )
    .then((res)=>res.json())
    .then((res)=>{
       setData(res?.data ||[])
    });

},[search]); //we can get location thru search inside of url
const onSelect=(id)=>{
navigate(`/properties/${id}`)
}
return( 
<Container>
    
    {
    data.map((value)=>{

        return <HomeCard onClick={()=>onSelect(value.id)} data={value} key={value.id}/>
    })}

</Container>
)

}
export default Properties;