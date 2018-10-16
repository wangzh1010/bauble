import Vue from 'vue'
import Router from 'vue-router'
import Foo from '@/components/Foo'
import Index from '@/components/Index'
import Case from '@/components/Case'
import Book from '@/views/Book'
import Drag from '@/views/Drag'
import Accordion from '@/views/Accordion'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'current',
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/foo',
        name: 'Foo',
        component: Foo
    }, {
        path: '/case',
        name: 'Case',
        component: Case,
        redirect:{name:'Book'},
        children:[{
            path:'book',
            name:'Book',
            component: Book,
        },{
            path:'drag',
            name:'Drag',
            component:Drag
        },{
            path:'accordion',
            name:'Accordion',
            component:Accordion
        }]
    },{
        path:'*',
        redirect:'/index'
    }]
})
