import axios from "axios";

const instance = axios.create({
    baseURL:'https://neko-cafe-back.herokuapp.com/'
})

export const RequestApi = {
    auth(value:boolean) {
        return instance.post('auth/test' , {success: value})
            .then(res => res.data)

    }
}
