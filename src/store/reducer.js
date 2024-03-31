// state의 초기값을 지정해주어야 함
let initialState = {
    count : 0
}
// 행동지침?을 store에 전달
// switch-case문 / if문 아무거나 
// reducer는 state, action을 매개변수로 가진다.
function reducer(state=initialState, action){
    if(action.type === "INCREMENT"){
        // 새로 객체를 전달해주어야 함
        return {...state, count : state.count +1}
    }
    else if(action.type ==="DECREMENT"){
        return {...state, count : state.count -1}
    }
    return state
}
export default reducer;