// state의 초기값을 지정해주어야 함
let initialState = {
    contactList: [],
    kw:''
}
// 행동지침?을 store에 전달
// switch-case문 / if문 아무거나 
// reducer는 state, action을 매개변수로 가진다.
function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                ...state, contactList:
                    [...state.contactList,
                    {
                        name: action.payload.name,
                        num: action.payload.num
                    }]
            }
        case "SEARCH_USERNAME":
            return{
                ...state, kw:action.payload.kw
            }

        default:
            return { ...state }
    }
}
export default reducer;