
import React from "react";
import GenCarusel from "../Carusel";
import CategoryCarusel from "../Category";




import { Container } from "./styled";

export const Home=()=>{
return( 
<Container>
<GenCarusel/>
<CategoryCarusel/>
</Container>
)

}
export default Home;