<template>
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
</template>

<script>

export default {
    name: 'VersiculosList',
    data() {
        return {
            
        }
    },

    created(){

    },

    methods: {
        
    }
}
</script>