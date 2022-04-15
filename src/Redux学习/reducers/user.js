const initState = {
    isLogin: false,
    username: '',
    avatar: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCESS':
            return{
                ...state,
                isLogin:true
            }
        default:
            return state
    }
}