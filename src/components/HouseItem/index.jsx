import {useParams }from 'react-router-dom';

import {  Container } from "./styled";

 
export const Houseitem=()=>{ 
const params=useParams();
console.log(params,'params');

return (
  <Container>HouseItem</Container>
)
};
export default Houseitem;














