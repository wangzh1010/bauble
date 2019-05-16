import Vue from 'vue'
import Router from 'vue-router'
import Foo from '@/components/Foo'
import Koo from '@/components/Koo'
import Index from '@/components/Index'
import Book from '@/views/Book'
import Drag from '@/views/Drag'
import Accordion from '@/views/Accordion'
import Modal from '@/views/Modal'
import Zoom from '@/views/Zoom'
import Flop from '@/views/Flop'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'current',
    routes: [{
        path: '/foo',
        name: 'Foo',
        component: Foo
    }, {
        path: '/koo',
        name: 'Koo',
        component: Koo
    }, {
        path: '/index',
        name: 'Index',
        component: Index,
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
        },{
            path:'modal',
            name:'Modal',
            component:Modal
        },{
            path:'zoom',
            name:'Zoom',
            component:Zoom
        },{
            path:'flop',
            name:'Flop',
            component:Flop
        }]
    },{
        path:'*',
        redirect:'/index'
    }]
})
