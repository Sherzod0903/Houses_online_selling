import React,{ }from "react";

import {  Container ,Squares,Icons} from "./styled";

 
export const Footer=()=>{ 


return(
  <Container>
   


<Squares>

  
     
    <Squares.Title>
    Contact Us
         </Squares.Title>
      
       <Squares.Text>
        <Icons.Direction/>
       329 Queensberry Street, North Melbourne VIC 3051, Australia.
       </Squares.Text>
       <Squares.Text>
        <Icons.Phone/>
       123 456 7890
       </Squares.Text>
       <Squares.Text>
        <Icons.Email/>
       support@houzing.com
       </Squares.Text>
      <Icons.Contact>
        <Icons.Facebook/>
        <Icons.Instagram/>
        <Icons.Linkedin/>
        <Icons.Twitter/>
      </Icons.Contact>
</Squares>

<Squares>


 
  <Squares.Title>
  Discover
  </Squares.Title>
    <Squares.Text>
   Chicago
    </Squares.Text>
    <Squares.Text>
  Los Angles
    </Squares.Text>
    <Squares.Text>
   Miami
    </Squares.Text>
    <Squares.Text>
   New York
    </Squares.Text>
</Squares>

<Squares>
  <Icons/>
  <Squares.Title>
  Lists by Category
  </Squares.Title>
  <Squares.Text>
  Apartments
    </Squares.Text>
    <Squares.Text>
   Condos
    </Squares.Text>
    <Squares.Text>
    Houses
    </Squares.Text>
    <Squares.Text>
    Offices
    </Squares.Text>
    <Squares.Text>
    Retail
    </Squares.Text>
    <Squares.Text>
    Villas
    </Squares.Text>




</Squares>

<Squares>
  
  <Squares.Title>
  Lists by Category
  </Squares.Title>
  <Squares.Text>
  About us
    </Squares.Text> 
    <Squares.Text>
    Terms & Conditions
    </Squares.Text>
    <Squares.Text>
    Support Center
    </Squares.Text>
    <Squares.Text>
    Contact Us
    </Squares.Text>


</Squares>





 
</Container>
)
};
export default Footer;














