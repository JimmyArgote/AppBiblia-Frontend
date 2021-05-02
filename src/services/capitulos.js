import { http } from './config'

export default {

    listarCapitulos: async (livro_id) => {
        return http.get(`livros/${livro_id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}