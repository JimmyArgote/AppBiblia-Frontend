<template>
  <v-card height="100%" width="300px">
    <v-navigation-drawer width="300px" height="100%" absolute permanent left>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
             <v-icon class="blue white--text">assignment</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group v-model="livro" color="primary">

            <v-list-item v-for="livro of livros" :key="livro.Id" :to="`/livros/${livro.Id}`">
                <v-list-item-icon>
                    <v-icon>mdi mdi-book-open-page-variant</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ livro.Nome }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
  </v-card>
</template>

<script>
import Livro from '../../services/livros'
import Utilities from '../../services/utilities'

export default {
    name: 'LivrosList',
    data(){
      return {
        livro: 0,
        fullPath: this.$route.fullPath,
        dense: false,
        fixedHeader: false,
        height: 670,
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

             // se não temos os livros armanzenados no localStorage, então fazemos a requisição (async)
            Livro.listar().then(response => {

            console.log('MODULE1: Request Livros saved in localStorage.livros')

            localStorage.livros = JSON.stringify(response.data)

            this.livros = response.data
            })

        } else {

            console.log(this.fullPath)

            this.livros = JSON.parse(localStorage.livros)
        }
    }

}
</script>>