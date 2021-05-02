import { http } from './config'

export default {

    listar: async () => {

        return http.get('livros', {
            responseType: 'JSON',
            headers: {
                "Content-Type": "application/json"
            },
        })
    },

    listarCapitulos: async (livro_id) => {

        return http.get(`livros/${livro_id}`, {
            responseType: 'JSON',
            headers: {
                "Content-Type": "application/json"
            },
        })
    }

}