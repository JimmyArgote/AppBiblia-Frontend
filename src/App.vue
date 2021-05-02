<template>
  <v-app>
    
    <Toolbar/>

    <nav class="nav_drawer v-navigation-drawer v-navigation-drawer--clipped v-navigation-drawer--fixed v-navigation-drawer--open theme--light">
      <LivrosList/>
    </nav>

    <v-content style="padding: 60px 256px 0px 300px;" class="v-main__wrap v-main" data-booted="true">

      

        <v-container>
          
          <transition>
            <keep-alive>
              <v-lazy
                v-model="isActive"
                :options="{
                  threshold: 0.6
                }"
                min-height="100vh"
                transition="fade-transition"
              >
                <router-view :key="$route.fullPath"></router-view>
              </v-lazy>
            </keep-alive>
          </transition>

        </v-container>

        <Footer/>

    </v-content>
    
  </v-app>
</template>

<script>
  
  import Toolbar from './components/Toolbar'
  import Footer from './components/footer'
  //import Breadcrumbs from './components/Breadcrumbs'
  import LivrosList from './modules/sidebar/LivrosList'

  export default {
      components: { Footer, Toolbar, LivrosList },
      name: 'App',
      
      data: ()=>({
        isActive: false
      }),

      created() {
        
      }
  }

</script>
<style scoped>
.nav_drawer {
  height: 100vh;
  top: 60px;
  max-height: calc(100vh - 60px);
  transform: translateX(0%);
  width: 300px;
}
.v-main__wrap {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
}
</style>
