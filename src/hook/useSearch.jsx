import { useLocation } from "react-router-dom";


export const useSearch=()=>{  //? - also added automaticall because of querry
const {search} =useLocation();
return new URLSearchParams(search);

}

export default useSearch;

//useReplace can not be used here due to  seen as hooks