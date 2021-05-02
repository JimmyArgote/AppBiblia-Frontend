import axios from 'axios'
//import Utilities from './utilities'

/*
var IPAddress = Utilities.getIp( (ip = 'localhost') => {
    console.log(ip)
    return ip
})
*/

export const http = axios.create({
    //baseURL: `http://localhost:8080/`
    baseURL: `http://localhost:55341/`

})