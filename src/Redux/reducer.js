
var initial_state={
    val:"off"
}
const reducer=(state=initial_state,action)=>{
    if (action.type==="on"){
        return {
            ...state,val:"on"
        }
    }
    else if((action.type==="off")){
        return {
            ...state,val:"off"
        }
    }
    else{
        return state
    }
}
export default reducer