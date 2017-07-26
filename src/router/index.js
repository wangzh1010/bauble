import Vue from 'vue'
import Router from 'vue-router'
import Foo from '@/components/Foo'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/foo',
        name: 'Foo',
        component: Foo
    }]
})