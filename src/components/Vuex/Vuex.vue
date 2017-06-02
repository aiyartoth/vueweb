<template>
    <div class="hello">
        <h1 class="page-title">This is Vuex Learn page!</h1>
        <h2>Basic Module</h2>
        <p class="count-show">计数器:{{countBasic}}
            <small class="text-info">(计算属性获取State)</small>
        </p>
        <p class="count-show">计数器:{{$store.state.basic.count}}
            <small class="text-info">(直接读取store)</small>
        </p>
        <button class="btn"
                @click="increment">+1
        </button>
        <button class="btn"
                @click="incrementDelay">+1 Delay
        </button>
        <button class="btn"
                @click="increment3">+1 Delay
        </button>
        <button class="btn"
                @click="increment2">+{{addNum}}
        </button>
        <button class="btn"
                @click="increment1">基数+1
        </button>
        <h2>其他的state信息</h2>
        <!--<p>{{countBasic}} {{theme}} {{name}}</p>-->
        <h2>其他的getters信息</h2>
        <p>{{doneTodos}} {{doneTodosCount}}</p>
        <h1>Child Module</h1>
        <p class="count-show">计数器 {{countChild}}</p>
        <n-summary></n-summary>
    </div>
</template>

<script>
    //    import "@/assets/css/reset.css"
    //    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    import {mapGetters, mapMutations, mapActions} from 'vuex'
    import nSummary from './summary'
    export default {
        name: 'hello',
        created: function () {
            console.log(this);
            //      console.log(hello);
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                addNum: 2
            }
        },
        computed: {
            //                ...mapState(['count','name','theme']),
            //            ...mapState({countBasic: 'count', name: 'name', theme: "theme"}),
            ...mapGetters(['doneTodos', 'doneTodosCount']),
            countBasic() {
                return this.$store.state.basic.count;
            },
            countChild() {
                return this.$store.state.child.count;
            }
            /*...mapState({
             count:state=>state.count,
             countAlias:'count',
             countPlusLocalState(state){
             return state.count+2
             }
             }),*/
            /*count(){
             //      return this.store.state.count
             return this.$store.state.count;
             }*/
        },
        methods: {
            ...mapMutations(['increment', 'incrementNum']),
            //            ...mapActions(['increment']),
            ...mapActions({incrementDelay: 'increment'}),
            increment1() {
                this.addNum++;
            },
            increment2() {
                this.$store.commit('incrementNum', this.addNum);
            },
            increment3() {
                this.$store.dispatch('increment');
            }
        },
        components: {
            nSummary
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../assets/css/common.styl";
    .count-show
        font-size 18px

    .count-show {
        font-size: 16px;
        font-weight: bold;
    }

    .btn {
        margin: 0;
        padding: 10px 20px;
        background: deepskyblue;
        border-radius: 4px;
        box-shadow: none;
    }
</style>
