import { http } from './config'

export default {

    listarVersiculos: async (fullPath) => {
        
        return http.get(`${fullPath}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}