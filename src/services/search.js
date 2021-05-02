import { http } from './config'

export default {

    listarOcorrencias: async (busca) => {
        return http.get(`Search/Index?palavra=${busca}`, {
            responseType: 'text',
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}