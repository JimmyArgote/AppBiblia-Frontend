<template>
    <div class="col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6">
      <h1>{{ livro.nome }} {{ livro.capitulo }}:{{ livro.versiculo }}</h1>
        <p v-for="item in versiculo" :key="item.Id">
            <sup>{{ item.Id }}</sup> <span class="verse_font">{{ item.Formatado }}</span>
        </p>
    </div>
</template>

<script>
import Versiculo from '../services/versiculo'

  export default {
    name: 'Versiculo',

    data () {
      return {
        fullPath: this.$route.fullPath,
        livros: '',
        livro: { result: [], id: 0, nome: '', qtd_cap: 0, capitulo: 0, versiculo: 0 },
        versiculo: []
      }
    },

    // DATA LOADED
    created() {
      console.log('------------------ VERSÍCULO ------------------')

      // faz a requisicao para buscar o versiculo (async)
      Versiculo.listarVersiculo(this.fullPath).then( (response) => {
          this.versiculo = response.data
      })

      console.log(this.fullPath)
      let routes = this.fullPath.split('/').slice(1)

      // [0] => livros | [1] livro_id | [2] capitulo_id | [3] versiculo_id
      this.livro.id        = parseInt(routes[1]),
      this.livro.capitulo  = parseInt(routes[2]),
      this.livro.versiculo = parseInt(routes[3]),

      this.livros = JSON.parse(localStorage.livros)

      let result = this.livros.filter( obj => {
        
        return obj.Id === this.livro.id
      })

      this.livro.result = result

      this.livro.nome = this.livro.result[0].Nome

      /*
      Livro.listar().then( response => {
        
        this.livros = response.data

        let result = this.livros.filter( obj => {
          
          return obj.Id === parseInt(this.livro.id)
        })

        this.livro.result = result

        this.livro.nome = this.livro.result[0].Nome

        console.log(this.livro.result)
      })
      */
    },

    // DOM LOADED
    mounted(){

    }
  }
</script>

<style scoped>
  .verse_font {
    font-size: 1.5rem;
    word-break: break-word;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    line-height: 1.47em;
  }
</style>