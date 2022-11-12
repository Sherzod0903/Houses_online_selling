import React,{ }from "react";

import {  Container ,Squares,Icons} from "./styled";

 
export const Whyus=()=>{ 


return(
  <Container>
    <Container.Title>Why choose us?</Container.Title>
    <Container.Text>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Container.Text>




<Squares>
<Squares.Item1>
  <Icons.Icon1/>
  <Squares.Title>Trusted By Thousands
  </Squares.Title>
    <Squares.Text>
    With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
    </Squares.Text>
</Squares.Item1>


<Squares.Item1>
  <Icons.Icon2/>
  <Squares.Title>
    Wide Renge Of Properties
  </Squares.Title>
    <Squares.Text>
    With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
    </Squares.Text>
</Squares.Item1>

<Squares.Item1>
  <Icons.Icon3/>
  <Squares.Title>Financing Made Easy
  </Squares.Title>
    <Squares.Text>
    With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
    </Squares.Text>
</Squares.Item1>

<Squares.Item1>
  <Icons.Icon4/>
  <Squares.Title>See Neighborhoods
  </Squares.Title>
    <Squares.Text>
    With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
    </Squares.Text>
</Squares.Item1>


</Squares>

 
</Container>
)
};
export default Whyus;














