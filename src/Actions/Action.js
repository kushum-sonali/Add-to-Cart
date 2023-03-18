export const Add=(item)=>{
    console.log(item);
return{
    type:"ADD_CART",
    payload:item
}
}

export const DLT=(id)=>{
    console.log(id);
return{
    type:"RMV_CART",
    payload:id
}
}
// remove individaual items
export const REMOVE =(iteam)=>{
    // console.log(iteam);
return{
    type:"RMV_ONE",
    payload:iteam
}
}