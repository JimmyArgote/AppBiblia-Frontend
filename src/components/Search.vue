<template>

    <v-list id="busca"
        subheader
        three-line
    >
      <v-subheader><h3>Busca por "{{ this.$route.query }}"</h3></v-subheader>

      <v-list-item 
        v-for="o of ocorrencias" :key="o.Livro_id + '_' + o.Capitulo + '_' + o.Id"
        :to="`/livros/${o.Livro_id}/${o.Capitulo}/${o.Id}`"
      >

        <v-list-item-content>

            <v-list-item-subtitle cols="12" md="12">{{ o.Formatado }}</v-list-item-subtitle>

            <v-list-item-title class="">

              <router-link text :to="`/livros/${o.Livro_id}/${o.Capitulo}/${o.Id}`">
                {{ o.Livro_nome + " " + o.Capitulo + ":" + o.Id }}
              </router-link>

            </v-list-item-title>

        </v-list-item-content>
        
      </v-list-item>

    </v-list>

</template>

<script>
import Search from '../services/search'

  export default {
    name: 'Search',

    data () {
      return {
        ocorrencias: [],
        busca: this.$route.query,
        settings: []
      }
    },

    created(){

      Search.listarOcorrencias(this.$route.query).then(response => {

        console.log(this.$route)

        this.ocorrencias = response.data.lista

        console.log(JSON.stringify(this.ocorrencias))

        console.log(this.ocorrencias)
      })
    }
  }
</script>