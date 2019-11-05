'use strict'

import theRouter from './routes.js'

import mainHeader from './cmps/header.cmp.js'

Vue.config.productionTip = false

var options = {
    router: theRouter,
    el: '#my-app',
    template: `
    <div>   
        <main-header class="header-container"></main-header>
        <router-view></router-view>
    </div>
    `,

    components:{
        mainHeader,
    }
}


new Vue(options);