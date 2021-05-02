<template>
  <v-container>
    <h1 class="text-center">{{ livro_nome }}</h1>
    <ul class="d-flex flex-wrap justify-right pl-0" style="list-style: none;">

        <li class="col-12 col-sm-1" v-for="item in capitulo" :key="item.Id">

            <v-btn text :to="`${fullPath}/${item.Id}`">
                <span class="chapter_number">{{ item.Id }}</span>
            </v-btn>
           
        </li>

    </ul>
  </v-container>
</template>

<script>
import Capitulo from '../services/capitulos'
import Utilities from '../services/utilities'

  export default {
    name: 'Capitulos',

    data () {
      return {
        fullPath: this.$route.fullPath,
        livro_nome: '',
        livro: { result: [], id: 0, nome: '', qtd_cap: 0, capitulo: 0, versiculo: 0 },
        capitulo: [],
        livros: []
      }
    },

    // DATA LOADED
    created() {
      console.log('------------------ CAPÍTULOS ------------------')

      // fazemos a requisicao para buscar os capitulos (async)
      Capitulo.listarCapitulos(this.$route.params.id).then(response => {

        this.capitulo = (response.data)
      })

      console.log(this.fullPath)

      this.livros    = (localStorage.hasOwnProperty('livros')) ? JSON.parse(localStorage.livros) : ''

      let routes     = this.fullPath.split('/').slice(1)

      // [0] => livros | [1] livro_id | [2] capitulo_id | [3] versiculo_id
      this.livro.id  = parseInt(routes[1])
      
      if(Utilities.isJson(this.livros)) {
        let result = this.livros.filter(obj => {
          return obj.Id === this.livro.id
        })

        this.livro.result = result

        this.livro_nome = this.livro.result[0].Nome
      }

      

      //Capitulo.switchRoute(this.$route.params.id)
      //lista todos os livros
      /*
        Livro.listar().then(response => {

          this.livros = response.data

          let id_route = parseInt(this.$route.params.id)

          let result = this.livros.filter(obj => {
            return obj.Id === id_route
          })

          this.livro = result

          this.livro_nome = this.livro[0].Nome

          //console.log(id)

          //console.log(result)
        })
      */
    },

    methods: {
      switchRoute: (livro_id) => {
        //livro.Sigla.toLowerCase().replace(/[^\w\s]/gi, '')
        this.livros.forEach(element => {
          if(element.id == livro_id) {
            console.log(element.Sigla.toLowerCase().replace(/[^\w\s]/gi, ''))
            this.router.push({ path: `/livros/${element.Sigla.toLowerCase().replace(/[^\w\s]/gi, '')}` })
          }
        })
      }
    },

    // DOM LOADED
    mounted() {}

  }
</script>

<style scoped>
.chapter_number {
  font-size: 20px;
}
</style>