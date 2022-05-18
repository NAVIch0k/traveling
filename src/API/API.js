import axios from "axios"

const instance = axios.create({
    baseURL: 'http://188.225.83.101/api/',
    withCredentials:true
})

export const AuthApi = {
    Registration(data) {
        return instance.post('user/sign',data)
    },
    Login(data) {
        return instance.put('user/sign',data)
    },
    Delete(id) {
        return instance.delete('user/sign',id)
    },
    CheckMe() {
        return instance.get('user')
    }
}