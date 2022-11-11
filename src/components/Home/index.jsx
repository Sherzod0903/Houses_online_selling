
import React from "react";
import GenCarusel from "../Carusel";
import CategoryCard from "../Categorycard";



import { Container } from "./styled";

export const Home=()=>{
return( 
<Container>
<GenCarusel/>
<CategoryCard/>
</Container>
)

}
export default Home;