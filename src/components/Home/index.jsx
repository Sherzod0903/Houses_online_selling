
import React from "react";
import GenCarusel from "../Carusel";
import CategoryCarusel from "../Category";
import RecommendCarusel from "../Recommend";
import Whyus from "../Whyus";




import { Container } from "./styled";

export const Home=()=>{
return( 
<Container>
<GenCarusel/> 
<RecommendCarusel/> 
<Whyus/> 
<CategoryCarusel/>
</Container>
)

}
export default Home;