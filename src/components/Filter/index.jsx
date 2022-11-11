import React, { useRef } from "react";
import { Dropdown } from 'antd';
import { Button, Input } from "../Generic";
import { Container, Icons, MenuWrapper,Section } from "./styled";
import uzeReplace from "../../hook/useReplace";
import {useNavigate,useLocation} from 'react-router-dom';
import useSearch from "../../hook/useSearch";

export const Filter=()=>{
  const location=useLocation();
  const navigate=useNavigate();
  const query =useSearch();

    const countryRef = useRef();
    const regionRef = useRef();
    const cityRef = useRef();
    const zipRef = useRef();
    const roomsRef = useRef();
    const sortRef = useRef();
    const sizeRef = useRef();
    const minPriceRef = useRef();
    const maxPriceRef = useRef();
console.log(query.get('city','params'));
const onChange=({target:{value,name}})=>{

navigate(`${location?.pathname}${uzeReplace(name, value)}`)

}

    const menu=(
        <MenuWrapper>
        <h1 className='subTitle'>Address</h1>
        <Section>
          <Input defaultvalue={query.get('country')} onChange={onChange} name="country" ref={countryRef} placeholder='Country' />
          <Input defaultValue={query.get('region')} onChange={onChange} name="region" ref={regionRef} placeholder='Region' />
          <Input defaultValue={query.get('city')} onChange={onChange} name="address" ref={cityRef} placeholder='City' />
          <Input defaultValue={query.get('zip_code')} onChange={onChange} name="zip_code" ref={zipRef} placeholder='Zip Code' />
        </Section>
        <h1 className='subTitle'>Apartment info</h1>
        <Section>
          <Input ref={roomsRef} placeholder='Rooms' />
          <Input ref={sizeRef} placeholder='Size' />
          <Input ref={sortRef} placeholder='Sort' />
        </Section>
        <h1 className='subTitle'>Price</h1>
        <Section>
          <Input ref={minPriceRef} placeholder='Min price' />
          <Input ref={maxPriceRef} placeholder='Max price' />
        </Section>
      </MenuWrapper>
    );
console.log(uzeReplace('address','tashkent'));


return( 
<Container>
    <Input icon={<Icons.Home/>} placeholder={'Enter an address, neighborhood, city, or ZIP code'}/>
    <Dropdown
        overlay={menu}
        placement='bottomRight'
        arrow={{ pointAtCenter: true }}
        trigger='click'
      >
        <div>
          <Button type='light'>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
    <Button type={'dark'}><Icons.Search/>Search</Button>

</Container>
);

};
export default Filter;