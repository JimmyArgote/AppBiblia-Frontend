<template>
    <div class="col-12 col-sm-12 col-md-12 offset-lg-2 col-lg-8" style="overflow-x: hidden;">
        <h1>{{ livro.nome }} {{ livro.capitulo }}</h1>
        <br />

        
          <v-list>
            <v-list-item v-for="(item, index) in capitulo" :key="item.Id">

              <v-list-item-action>
                <v-btn text :to="fullPath + `/${index + 1}`">
                  {{ item.Id }}
                </v-btn>
              </v-list-item-action>

              <v-list-item-content>
                {{ item.Formatado }}
              </v-list-item-content>

            </v-list-item>
          </v-list>
        

        <div class="text-center d-none">
            <v-pagination
            v-model="page"
            :circle="circle"
            :disabled="false"
            :length="length"
            :next-icon="nextIcon"
            :prev-icon="prevIcon"
            :page="page"
            :total-visible="totalVisible"
            
            ></v-pagination>
        </div>
        <router-link class="float-left d-none" 

          :to="(parseInt(this.$route.params.id)-1).toString()" 
          
          v-text="parseInt(this.$route.params.id)-1">

        </router-link>
        <router-link class="float-right d-none" :to="(parseInt(this.$route.params.id)+1).toString()" v-text="parseInt(this.$route.params.id)+1"></router-link>
         <v-btn
          color="success"
          class="mt-12 d-none"
          @click="overlay = !overlay"
        >
          Show Overlay
        </v-btn>
        <v-overlay
          :absolute="absolute"
          :value="overlay"
        >
          <v-btn
            color="success"
            @click="overlay = false"
          >
            Hide Overlay
          </v-btn>
        </v-overlay>

        <v-btn 
          align="center" 
          justify="center" 
          class="ma-2 center_nav" 
          absolute 
          left 
          top 
          outlined 
          large 
          fab 
          color="indigo" 
          :to="(this.$route.params.id != 1) ? (parseInt(this.$route.params.id)-1).toString() : `/livros/${parseInt(livro.id)-1}/1`">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn 
          align="center" 
          justify="center" 
          class="ma-2 center_nav" 
          absolute 
          right 
          top 
          outlined 
          large 
          fab 
          color="indigo" 
          :to="(parseInt(this.livro.qtd_cap) !== parseInt(livro.capitulo)) ? (parseInt(this.$route.params.id)+1).toString() : `/livros/${(parseInt(livro.id)+1).toString()}/1`">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>

    </div>
</template>

<script>
import Versiculos from '../services/versiculos'
import Capitulos from '../services/capitulos'
//import { mdiAccount } from '@mdi/js'

  export default {
    name: 'Versiculos',

    data () {
      return {
        routes: [],
        fullPath: this.$route.fullPath,
        livro: { result: [], id: 0, nome: '', sigla: '', qtd_cap: 0, qtd_vers: 0, capitulo: 0, versiculo: 0 },
        absolute: true,
        overlay: false,
        capitulo: [],
        capitulos: [],
        circle: false,
        disabled: false,
        length: 2,
        nextIcon: 'navigate_next',
        nextIcons: ['mdi-chevron-right', 'mdi-arrow-right', 'mdi-menu-right'],
        prevIcon: 'navigate_before',
        prevIcons: ['mdi-chevron-left', 'mdi-arrow-left', 'mdi-menu-left'],
        page: 1,
        totalVisible: 10
      }
    },
    // DATA LOADED
    created() {
      console.log('------------------ VERSÍCULOS ------------------')

      Versiculos.listarCapitulo(this.fullPath).then(response => {

          this.capitulo = response.data

          this.livro.qtd_vers = response.data.filter(val => {
            return val.Id
          }).length

          console.log(this.livro.qtd_vers)

          //console.log(this.livro.qtd_vers)
          //console.log(this.$route.params.id)
      })

      let routes_cap = this.fullPath.split('/').slice(1)

      Capitulos.listarCapitulos(routes_cap[1]).then(response => {

        this.capitulos = response.data

        this.livro.qtd_cap = response.data.filter(val => {
          return val.Id
        }).length

        console.log(this.livro.qtd_cap)
        //console.log(this.$route.params.id)
      })

      //console.log(this.fullPath)

      let routes = this.fullPath.split('/').slice(1)

      this.routes = routes

      // [0] => livros | [1] livro_id | [2] capitulo_id
      this.livro.id        = routes[1]
      this.livro.capitulo  = routes[2]

      this.livros = JSON.parse(localStorage.livros)

      let result = this.livros.filter( obj => {
        
        return obj.Id === parseInt(this.livro.id)
      })

      this.livro.result = result

      this.livro.nome = this.livro.result[0].Nome

      this.livro.sigla = this.livro.result[0].Sigla
      //console.log(this.$route.params.id)
      
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

    },

    methods: {
      clipboardSuccessHandler ({ value }) {
        console.log('success', value)
      },
  
      clipboardErrorHandler ({ value }) {
        console.log('error', value)
      }
    }
  }
</script>

<style scoped>
  .chapter_font {
    font-size: 1.5rem;
    word-break: break-word;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    line-height: 1.47em;
  }

  .center_nav {
    top: calc(50% - 64px) !important;
  }

</style>