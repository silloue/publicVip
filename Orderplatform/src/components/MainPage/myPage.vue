<template>
    <div> 
        <Loading :class="load"/> 
        <div :class="afterLoad + ` myPage`">
            <header class="myPage__header container">
                <div class="col-xs-12 myPage__header--portrait container">
                    <img src="../../assets/myPage.jpg" >
                    <span class="col-xs-12">jefferson</span>
                </div>
                <div class="myPage__twoFloat col-xs-12">
                    <div class="col-xs-6">
                        <span>29</span>
                        <span class='dis'>Purchure Compluad</span>
                    </div>
                    <div class="col-xs-6">
                        <span>29</span>
                        <span class="dis">Purchure Compluad</span>
                    </div>
                </div>
            </header>
            <footer class="myPage__footer">
                <ul>
                    <li v-for="item of gadget" :key="item.id">{{item.name}}</li>
                </ul>
            </footer>
        </div>
    </div>
</template>

<script>
import Loading from '../Loading'
export default {
    name:'carPage',
    data(){
        return {
            load:'',
            afterLoad:'waitLoading',
            gadget:[
                {id:'1', name:'我的订单'},
                {id:'2', name:'我的套餐'},
                {id:'3', name:'历史纪录'}
            ]
        }
    },
    created() {
        setTimeout(()=>{
            this.load = "waitLoading";
            this.afterLoad = '';
        },1500)
    },
    components:{
        Loading
    }
}
</script>
<style lang='scss' scoped>
@import url("../../../node_modules/bootstrap/dist/css/bootstrap.css");

    .waitLoading{
        display: none;
    }

    .myPage{
        &__footer{
            ul{
                width:100%;
                height:40px;
                box-sizing: border-box;
                list-style: none;
                padding:0;
                li:nth-child(1){
                    margin-top:10px;
                }
                li{
                    line-height: 40px;
                    border-bottom:0.2px solid #ededed;
                    padding-left:20px;
                    margin:0px;
                }
            }
        }
        &__header{
            position: relative;
            margin: 0px;
            padding: 0px;
            background-image: url("../../assets/myPageBack.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-attachment: fixed;
            height: 100px;
            width: 100%;
            min-height: 41vh;
            overflow: hidden;
            &--portrait{
                position: absolute;
                top:40%;
                left:50%;
                margin-left:-50px;
                margin-top:-50px;
                width:100px;
                height:100px;
                border:8px solid rgba(199, 194, 194, 0.7);
                border-radius: 50%;
                padding:0;
                img{
                    width:100%;
                    border-radius: 50%;
                }
                span{
                    display: block;
                    text-align: center;
                    line-height: 50px;
                    color:#fff;
                    padding:0;
                    margin-left:2px;
                }
            }
        }

        &__twoFloat{
            position: absolute;
            bottom: 10px;
                div:nth-child(1){
                    border-right:0.5px solid #fff;
                }
                div:nth-child(2){
                    border-left:0.5px solid #fff;
                }
                div{
                    width:50%;
                    height:8.5vh;
                    border-top:1px solid #fff;
                    box-sizing: border-box;
                    span{
                        display: block;
                        text-align: center;
                        font-size:16px;
                        line-height: 38px;
                        color:#fff;
                    }
                    .dis{
                        margin-top:-10%;
                        font-size:12px;
                    }
                }
        }
    }
</style>