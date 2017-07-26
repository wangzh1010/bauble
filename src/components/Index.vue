<template>
    <div>
        <p>login status : {{isLogin ? 'login' : 'unlogin'}}</p>
        <p v-show="loading">loading</p>
        <p v-show="isLoading" style="color: #ff9900;">loading2</p>
        <div class="group">
            1: mapMutations
            <Button type="info" @click="doLogin">Login</Button>
            <Button type="info" @click="doLogout">Login Out</Button>
        </div>
        <div class="group">
            2: mapActions
            <Button type="info" @click="doLogin1">Login 1</Button>
            <Button type="info" @click="doLogout1">Login Out 1</Button>
        </div>
        <div class="group">
            3: commit mutation dispatch action
            <Button type="info" @click="doLogin2">Login 2</Button>
            <Button type="info" @click="doLogout2">Login Out 2</Button>
        </div>
        <Button type="info" @click="showModal">show Modal</Button>
        <alert :message="message"></alert>
    </div>
</template>
<script type="text/javascript">
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex'
import {DO_LOGIN, DO_LOGOUT, DO_LOGIN_1, DO_LOGOUT_1, SHOW_MODAL} from '../store/mutation-types'
export default {
    data: function() {
        return {
            isLoading: false,
            message: ['status: 200', 'body: ok', 'url: /index']
        }
    },
    methods: {
        ...mapMutations({
            doLogin: DO_LOGIN,
            doLogout: DO_LOGOUT,
            showModal: SHOW_MODAL
        }),
        ...mapActions({
            doLogin1: DO_LOGIN_1,
            doLogout1: DO_LOGOUT_1
        }),
        doLogin2() {
            this.$store.commit(DO_LOGIN);
        },
        doLogout2: function() {
            this.isLoading = true;
            this.$store.dispatch('doLogout2').then(() => {
                this.isLoading = false;
            })
        }
    },
    computed: {
        ...mapState({
            isLogin: state => state.Login.loginStatus,
            loading: state => state.Login.loading
        })
    },
    components: {

    }
}
</script>
<style type="text/css">
    .group{
        padding: 10px 0px;
    }
</style>
