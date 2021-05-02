import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/home', name: 'home', component: require('./components/Home.vue').default },
    { path: '/livros', name: 'livros', component: require('./components/Livros.vue').default },
    { path: '/livros/:id', name: 'capitulos', component: require('./components/Capitulos.vue').default },
    { path: '/livros/:id/:id', name: 'versiculos', component: require('./components/Versiculos.vue').default },
    { path: '/livros/:id/:id/:id', name: 'versiculo', component: require('./components/Versiculo.vue').default },
    { path: '/Search/Index', props: route => ({ query: route.query.palavra }), name: 'search', component: require('./components/Search.vue').default },
];

const router = new VueRouter({
    mode: 'history',  //padrao "history" removes # (hashtag) from url  options ( hash, abstract, history )
    base: '/',
    fallback: true, //router should fallback to hash (#) mode when the browser does not support history.pushState
    routes // short for `routes: routes`
});

export default router;