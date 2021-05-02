<template>
    <div class="col-12 col-sm-12 col-md-12 offset-lg-2 col-lg-8" style="overflow-x: hidden;">

        <h1>{{ Livro_nome }} {{ Capitulo_id }}</h1>
        <br />

        <v-list>
          <v-list-item v-for="(item) in VersiculosList" :key="item.numero">

            <v-list-item-action>
              <v-btn text :to="fullPath + `/${item.numero}`">
                {{ item.numero }}
              </v-btn>
            </v-list-item-action>

            <v-list-item-content>
              {{ item.formatado }}
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
          :to="(Capitulo_id != 1) ? (Capitulo_id-1).toString() : `/livros/${(Livro_id-1).toString()}/1`">
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
          :to="(Caps_total != Capitulo_id) ? (Capitulo_id+1).toString() : `/livros/${(Livro_id+1).toString()}/1`">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>

    </div>
</template>

<script>
import Versiculos from '../services/versiculos'
//import Capitulos from '../services/capitulos'
//import { mdiAccount } from '@mdi/js'
//import VersiculosRenderList from './VersiculosRenderList'

  export default {
    
    name: 'Versiculos',

    data () {
      return {
        routes: [],
        fullPath: this.$route.fullPath,
        absolute: true,
        overlay: false,

        VersiculosList: [],
        Vers_total: 0,
        Caps_total: 0,
        Capitulo_id: 0,
        Livro_id: 0,
        Livro_nome: '',
        Livro_sigla: '',
        Testamento: '',

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

      Versiculos.listarVersiculos(this.fullPath).then(response => {

          this.VersiculosList = response.data.VersiculosList
          this.Vers_total     = response.data.Vers_total
          this.Caps_total     = response.data.Caps_total
          this.Capitulo_id    = response.data.Capitulo_id
          this.Livro_id       = response.data.Livro_id
          this.Livro_nome     = response.data.Livro_nome
          this.Livro_sigla    = response.data.Livro_sigla
          this.Testamento     = response.data.Testamento

          //console.table(response.data)
          //console.log(response.data)

          //VersiculosRenderList.RenderList(this.VersiculosList)
      })
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