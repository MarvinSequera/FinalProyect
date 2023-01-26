import axios from "axios"

export default class Services{
    constructor(){
        this._service= axios.create({
            baseURL:process.env.REACT_APP_URL,
            withCredentials:true
        })
    }
    request = id => this._service.get(`/menu/${id}`)
    category = category => this._service.get(`/menu/category/${category}`)
}