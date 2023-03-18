const init_state={
    carts:[]
};
export const cartreducer=(state=init_state,action)=>{
    switch(action.type){
        case "ADD_CART":
     const IteamsIndex = state.carts.findIndex((iteam)=> iteam.id===action.payload.id);
if(IteamsIndex>=0){
state.carts[IteamsIndex].qnty++
}
else{
    const temp = {...action.payload , qnty:1}
     return{
                ...state,
                carts:[...state.carts,temp]
            }
}


           


       case "RMV_CART":
        const data = state.carts.filter((el)=>el.id!== action.payload);
        return {
            ...state,
            carts:data
        }

        case "RMV_ONE":
        const IteamsIndex_rmv = state.carts.findIndex((iteam)=> iteam.id===action.payload.id);
       if(state.carts[IteamsIndex_rmv].qnty >=1){
        const dltitem = state.carts[IteamsIndex_rmv].qnty-=1
        return{
            ...state,
            carts:[...state.carts]
       }
       }
       else if(state.carts[IteamsIndex_rmv].qnty ===1){
        const data= state.carts.filter((el)=>el.id != action.payload.id);
        return {
            ...state,
            carts:data
        }

       }


        default:
            return state
}
}