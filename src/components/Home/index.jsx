
import React from "react";
import GenCarusel from "../Carusel";
import CategoryCarusel from "../Category";

import Readmore from "../ReadMore";
import Recentrent from "../Recentrent";
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
<Readmore/>
<Recentrent/>


</Container>
)

}
export default Home;