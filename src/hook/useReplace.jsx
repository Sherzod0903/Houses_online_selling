
export const uzeReplace=(query,value)=>{  //? - also added automaticall because of querry
let url=new URL(window.location.href)  //obtained the link from browser due to windows
url.searchParams.set(query,value) // info can be set and delete  looks like Localstroage
if(!value &&value !==0){
    url.searchParams.delete(query)
}
return url.search;
}

export default uzeReplace;

//useReplace can not be used here due to  seen as hooks