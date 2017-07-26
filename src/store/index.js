import Vue from 'vue'
import Vuex from 'vuex'
import { INCREASE, DECREASE, SHOW_MODAL, HIDE_MODAL } from './mutation-types'
import Login from './login'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        notify: false,
        count: 0,
        todos: [
            { id: '1', text: '...1', done: false },
            { id: '2', text: '...2', done: true }
        ]
    },
    getters: {
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        },
        unDone(state) {
            return state.todos.filter(todo => !todo.done)
        },
        doneTodosCount(state, getter) {
            return getter.doneTodos.length
        }
    },
    mutations: {
        [INCREASE](state, { base = 1 } = {}) {
            store.state.count += base
        },
        [DECREASE]() {
            store.state.count--
        },
        [SHOW_MODAL]() {
            store.state.notify = true;
        },
        [HIDE_MODAL]() {
            store.state.notify = false;
        }
    },
    actions: {
        increase(context) {
            setTimeout(function() {
                context.commit(INCREASE)
                context.commit(SHOW_MODAL)
            }, 1000);
        },
        decrease({ commit }) {
            commit(DECREASE)
        },
        decreaseMapping({ commit }) {
            setTimeout(function() {
                commit(DECREASE)
                commit(SHOW_MODAL)
            }, 1500)
        }
    },
    modules: {
        Login
    }
})
export default store