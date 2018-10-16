<template>
    <div class="main">
        <span>count : {{count}}</span>
        <div class="group">
            <Button @click="add">increase</Button>
            <Button type="primary" @click="decrease">decrease</Button>
            <Button type="warning" @click="add10">increase10</Button>
        </div>

        <p>countPlusLocal : {{countPlusLocal}}</p>
        <p>countAlias : {{countAlias}}</p>
        <p>defaultCounter : {{defaultCounter}}</p>
        <p>doneTodosCount : {{doneTodosCount}}</p>
        <div class="group">
            <p v-for="(todo,index) in doneTodos" :key="index">done: {{todo}}</p>
            <p v-for="(todo,index) in unDoneAlias" :key="index">undone : {{todo}}</p>
        </div>
        <div class="group">
            异步Actions
            <p> count:  {{count}}</p>
            <Button type="info" @click="increase2">increase</Button>
            <Button type="info" @click="decreaseMapping">decrease</Button>
        </div>
        <div class="group">
            <Button type="info" @click="showModal">show Modal</Button>
        </div>
        <alert :message="message"></alert>
    </div>
</template>
<script type="text/javascript">
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from 'vuex'
import * as types from '../store/mutation-types'
export default {
    data: function() {
        return {
            counter: 10,
            localCount: 100,
            book: {
                w: 10,
                h: 5,
                l: 12
            },
            message: ['a: 1', 'b: 2', 'c: 3']
        }
    },
    methods: {
        ...mapMutations({
            add: types.INCREASE,
            decrease: types.DECREASE,
            showModal: types.SHOW_MODAL
        }),
        ...mapActions({
            increase2: 'increase'
        }),
        ...mapActions(['decreaseMapping']),
        add10() {
            this.$store.commit({
                type: types.INCREASE,
                base: 10
            })
        },
        increase1() {
            this.$store.commit(types.INCREASE)
        },
        decrease1() {
            this.$store.commit(types.DECREASE)
        },
        increase22() {
            this.$store.dispatch('increase')
        },
        decrease2() {
            this.$store.dispatch('decrease')
        }
    },
    computed: {
        defaultCounter() {
            return this.counter + 11
        },
        ...mapGetters(['doneTodosCount', 'doneTodos']),
        ...mapGetters({
            unDoneAlias: 'unDone'
        }),
        ...mapState({
            count: state => state.count,
            countAlias: 'count',
            countPlusLocal: function(state) {
                return state.count + this.localCount
            }
        })
    }
}
</script>
<style>
    .group{
        padding: 10px 0px;
    }
    p{
        margin: 8px 0px;
    }
</style>
