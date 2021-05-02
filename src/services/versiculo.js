import { http } from './config'

export default {

    listarVersiculo: async (fullPath) => {

        return http.get(`${fullPath}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}