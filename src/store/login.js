import { DO_LOGIN, DO_LOGOUT, DO_LOGIN_1, DO_LOGOUT_1 } from './mutation-types'
export default {
    state: {
        loginStatus: 0,
        loading: false
    },
    getters: {

    },
    mutations: {
        [DO_LOGIN]: function(state) {
            state.loginStatus = 1
        },
        [DO_LOGOUT]: function(state) {
            state.loginStatus = 0
        }
    },
    actions: {
        [DO_LOGIN_1]({ state, commit }) {
            state.loading = true;
            setTimeout(() => {
                commit(DO_LOGIN);
                state.loading = false
            }, 2000)
        },
        [DO_LOGOUT_1]: function({ state, commit }) {
            state.loading = true
            setTimeout(() => {
                commit(DO_LOGOUT)
                state.loading = false
            }, 1200)
        },
        doLogout2: function({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit(DO_LOGOUT)
                    resolve()
                }, 2000)
            })
        }
    }
}