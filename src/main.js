import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
//import '@fortawesome/fontawesome-free/css/all.css'
//import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Clipboard from 'v-clipboard'
 
Vue.use(Clipboard)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  
  created(){

  var _lsTotal = 0, _xLen, _x;

  for (_x in localStorage) {

    if (!localStorage.hasOwnProperty(_x)) {
      continue
    }
    _xLen = ((localStorage[_x].length + _x.length) * 2)

    _lsTotal += _xLen

    console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")

  }

  console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
    
  },
  /*icons: {
    iconfont: 'md',
  },
  icons: {
    iconfont: 'fa',
  },*/
  render: h => h(App)
}).$mount('#app')
