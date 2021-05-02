<template>
  <div>
    
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      fixed
      height="60px"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Bíblia Online</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col cols="12" md="6">
        
        <v-form @submit.prevent="sendKeywordFind(keyword)" id="check-login-form">
          <v-container class="fill-height v-input--is-focused primary--text" fluid>
            <v-row>
              <v-col cols="12" md="10">
                <v-text-field
                  class="mx-3 mt-7 primary--text"
                  clearable
                  solo-inverted
                  flat
                  dark
                  label="Uma frase ou palavra ..."
                  prepend-inner-icon="search"
                  color="deep-purple accent-4"
                  placeholder="Busca"
                  @click:clear="clearSearch"
                  v-model="keyword"
                  ref="name">
                  <v-btn color="primary" text @click="submit" form="check-login-form">Submit</v-btn>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

      </v-col>

      <v-toolbar-items>
        <v-btn text to="/home">Home</v-btn>
        <v-btn text to="/livros">Livros</v-btn>
        <v-btn text to="/capitulos">Capítulos</v-btn>
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
        
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>

        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
      
    </v-app-bar>

  </div>
</template>

<script>
    export default {
      name: 'Toolbar',

        data: () => ({
          url: "/Search/Index?palavra=",
          submit: null,
          errorMessages: "",
          keyword: "",
          extended: false,
          extendedSlot: false,
          prominent: false,
          required: false,
          dense: false,
          collapse: false,
          flat: false,
          bg: false,
          extensionHeight: 48,
          collapseOnScroll: true,
          'clipped-left': true
        }),

        methods: {

          sendKeywordFind(busca) {

            console.log(busca)
            
            //redirect através do vue-router para o component de busca.
            this.$router.push({ name: 'search', query: busca })
          },

          clearSearch () {
            this.keyword=""
          }

        }
    }
</script>