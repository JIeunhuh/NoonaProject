import { authActions } from "../reducer/authReducer";

function login(id, password, authenticate) {
    return (dispatch, getState) => {
      dispatch(authActions.login({id,password}))
    };
}

function logout() {
    return (dispatch, getState) => {
      dispatch(authActions.logout({authenticate : false}))
    };
}

export const authenticateAction = { login, logout };