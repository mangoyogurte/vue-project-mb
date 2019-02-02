import Vue from 'vue'
import App from './App'
import router from './router'
const VConsole = require('vconsole/dist/vconsole.min.js');

Vue.config.productionTip = false;
if(process.env.NODE_ENV==='development'){
  const vConsole = new VConsole();
}

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
