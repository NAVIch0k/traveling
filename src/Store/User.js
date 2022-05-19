import {AuthApi} from "../API/API";

const REGISTRATION = 'REGISTRATION'
const DELETE = 'DELETE_USER'


let initialState = {
    description: 1,
    email: "1",
    f_name: "1",
    l_name: "1",
    photo_path: "1",
    reg_date: "1",
    user_id: 1
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION: {
            return {...state, ...action.data.data[0]}
        }case DELETE: {
            return {...state, ...JSON.parse(JSON.stringify(initialState))}
        }
        default: {
            return state
        }
    }
}

const SetUserDataAC = (data) => ({type: REGISTRATION, data})
const DeleteUserDataAC = () => ({type: DELETE})

export const RegistrationSend = (data) => async (dispatch) => {
    try {
        let response = await AuthApi.Registration(data)
        dispatch(SetUserDataAC(response))
    } catch (e) {
        console.log(e)
    }
}

export const LoginSend = (data) => async (dispatch) => {
    try {
        await AuthApi.Login(data)
        dispatch(SetUserDataAC(await AuthApi.CheckMe()))
    } catch (e) {
        console.log(e)
    }
}

export const DeleteSend = (id) => async (dispatch) => {
    try {
        await AuthApi.Delete(id)
        dispatch(DeleteUserDataAC())
    } catch (e) {
        console.log(e)
    }
}

export const AuthMe = () => async (dispatch) => {
    try {
        dispatch(SetUserDataAC(await AuthApi.CheckMe()))
    } catch(e) {
        console.log(e)
    }
}

export default userReducer