import styled  from "styled-components";
import { ReactComponent as home } from '../../asset/icons/home.svg'
import { ReactComponent as filter } from '../../asset/icons/filter.svg';
import { ReactComponent as search } from '../../asset/icons/search.svg';




const Container=styled.div` 
display:flex;
padding:var(--padding);
padding-top:10px;
padding-bottom:10px;
gap:20px;
`
const Icons=styled.div``;
Icons.Home=styled(home)`margin-right:8px;`;
Icons.Filter=styled(filter)`margin-right:8px;`;
Icons.Search=styled(search)`margin-right:8px;`;
const MenuWrapper = styled.div`
width:100%;
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
`;

export { Container ,Icons,MenuWrapper, Section }