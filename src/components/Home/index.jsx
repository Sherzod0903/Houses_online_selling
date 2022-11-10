
import React from "react";
import GenCarusel from "../Carusel";
import HomeCard from "../Housecard";


import { Container,Body } from "./styled";

export const Home=()=>{
return( 
<Container>
<GenCarusel/>
<Body>
    <HomeCard/>
<HomeCard/>
<HomeCard/>
    </Body>

</Container>
)

}
export default Home;