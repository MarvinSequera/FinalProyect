import axios from "axios"

export default class Services{
    constructor(){
        this._service = axios.create({
            baseURL:process.env.REACT_APP_URL,
            withCredentials:true
        })
    }

    addRequest = newRequest => this._service.post('/order',newRequest)
    orderDetail = () => this._service.get('/order/review')
    dishDelete = id => this._service.post(`/order/delete/${id}`)
    dishEdit = id => this._service.get(`/order/edit/${id}`)
    dishPost = (id,newRequest) => this._service.post(`/order/edit/${id}`,newRequest)
    userId = () => this._service.get('/order/user')
    orderReady = () => this._service.post('/order/ready')
}
