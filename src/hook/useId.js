import { useId } from "react";

export const useUniqueId=()=>{
    const id=useId()
    return id;

}

export default useUniqueId;