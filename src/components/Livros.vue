<template>
    <v-simple-table :dense="dense" :fixed-header="fixedHeader" :height="height">

        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">ID</th>
                    <th class="text-left">Ordem</th>
                    <th class="text-left">Nome</th>
                    <th class="text-left">Sigla</th>
                    <th class="text-left">Testamento</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="livro of livros" :key="livro.Id">
                    <td>{{ livro.Id }}</td>
                    <td>{{ livro.Ordem }}</td>
                    <td>
                      <v-btn text :to="`/livros/${livro.Id}`">{{ livro.Nome }}</v-btn>
                    </td>
                    <td>{{ livro.Sigla }}</td>
                    <td>{{ livro.Testamento }}</td>
                </tr>
            </tbody>
        </template>

    </v-simple-table>
</template>

<script>
import Livros from '../services/livros'
import Utilities from '../services/utilities'

export default {
    name: 'Livros',
    data(){
      return {
        fullPath: this.$route.fullPath,
        dense: false,
        fixedHeader: false,
        height: 'auto',
        livros: [],
        capitulos: []
      }
    },

    // DATA LOADED
    created() {
      console.log('------------------ LIVROS ------------------')

      //se a propriedade livros não existe no localStorage, criamos ela.
      if(!localStorage.hasOwnProperty('livros')){

        localStorage.livros = ''
      } 

      // checa se o valor da variavel no localStorage.livros não é um json ou se tem valor igual 0
      if( !Utilities.isJson(localStorage.livros) ) {

        // se não temos os livros armanzenados no localStorage, então fazemos a requisição
        Livros.listar().then(response => {

          console.log('Request Livros saved in localStorage.livros')

          localStorage.livros = JSON.stringify(response.data)

          this.livros = response.data
        })

      } else {

        console.log(this.fullPath)

        this.livros = JSON.parse(localStorage.livros)
      }

    },

    methods: {
      getCapitulos: (livro_id) => {
        Livros.listarCapitulos(livro_id).then(response => {
          console.log(JSON.stringify(response.data))
          this.capitulos = JSON.stringify(response.data)
        })
      }
    }
}
</script>