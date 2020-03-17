<template>
    <div class="mainPage">
        <Loading :class="load"/>
        <div :class="`mainPage__router ` + waitLoading" v-if="apading == 1">
            <homePage />
        </div>
        <div :class="`mainPage__router ` + waitLoading" v-if="apading == 2">
            <carPage />
        </div>
        <div :class="`mainPage__router ` + waitLoading" v-if="apading == 3">
            <myPage />
        </div>
        
        <div>
            <navigate @routePage="getData"/>
        </div>
    </div>
</template>

<script>
import homePage from './homePage'
import navigate from './navigate'
import Loading from '../Loading'
import carPage from './carPage'
import myPage from './myPage'

export default {
    name:'mainPage',
    data() {
        return {
            waitLoading:'waitLoading',
            load:'',
            apading:1
        }
    },
    created(){
        this.apading = this.$route.params.pageIndex
        setInterval( () => {
            this.waitLoading = '';
            this.load = 'waitLoading'
        },2500)
    },
    methods:{
        getData(val){
            this.apading = val;
        }
    },
    components:{
        homePage,
        navigate,
        Loading,
        carPage,
        myPage
    },
}
</script>
<style lang='scss' scoped>
    .waitLoading{
        display: none;
    }
    .mainPage{
        margin:0px;
        paddinG:0px;
        background-color: rgb(244,241,242);
        height:100px;
        width:100%;
        min-height: 100vh;
        overflow: hidden;
        &__router{
            width:88%;
            margin:10px 0 0 6%;
            min-height: calc(100% - 160px);
            height: calc(100% - 120px);
            border-radius: 4px 4px 4px 4px;
            background-color: #fff;
            overflow-y: auto;
            position: relative;
            &::-webkit-scrollbar{
                display:none;
            }
        }
    }
</style>