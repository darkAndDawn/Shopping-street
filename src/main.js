import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {request} from "../network/request";
import url from "../network/url";
import { Toast } from 'vant';
import 'vant/lib/index.css'

Vue.use(Toast);
import VueLazyload from 'vue-lazyload'
//Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
    //preLoad: 1.3,
    error: require('./assets/img/error.jpg'),
    loading: require('./assets/img/loading.gif'),
    //attempt: 1
})

Vue.prototype.request = request
Vue.prototype.url = url
request({
    url: url.multidata,
}).then(res => {
    // console.log(res);
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
