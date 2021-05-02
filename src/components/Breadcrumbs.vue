<template>

    <v-breadcrumbs :items="routes">
        
        <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
        </template>

    </v-breadcrumbs>

</template>

<script>

  export default {
    name: 'Breadcrumbs',

    data() {
        return {
            fullPath: this.$route.fullPath,

            livro: { result: [], id: 0, nome: '', qtd_cap: 0, capitulo: 0, versiculo: 0 },

            routes: [
                {
                    text: 'Livro',
                    disabled: false,
                    to: ''
                },
                {
                    text: 'Capítulo',
                    disabled: false,
                    to: ''
                },
                {
                    text: 'Versículo',
                    disabled: false,
                    to: ''
                }
            ]
        }
    },

    created() {

        //console.log("jimmy")
        //console.log(this.fullPath)

        let routes = this.fullPath.split('/').slice(1)

        // [0] => livros | [1] livro_id | [2] capitulo_id | [3] versiculo_id
        this.livro.id        = parseInt(routes[1])

        this.livro.capitulo  = parseInt(routes[2])

        this.livro.versiculo = parseInt(routes[3])
        
        this.routes[0].disabled = false
        this.routes[0].text = routes[1] != "" ? routes[1] : ''
        this.routes[0].to = "/"+routes[1] != "" ? routes[1] : ''

        this.routes[1].disabled = false
        this.routes[1].text = routes[2] != "" ? routes[2] : ''
        this.routes[1].to = "/"+routes[2] != "" ? routes[2] : ''

        this.routes[2].disabled = false
        this.routes[2].text = routes[3] != "" ? routes[3] : ''
        this.routes[2].to = "/"+routes[3] != "" ? routes[3] : ''
    },

    mounted() {

    }
  }
  
</script>