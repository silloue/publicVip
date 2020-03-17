<template>
    <div class="homePage">
        <div >
            <header class="homePage__header">
                <img src="../../assets/loging.jpg" alt="">
                <p>There is a kind of beauity in imp erfection</p>
                <p>If you are ever in trouble, don't try to be brave, just run, just run away. </p>
                <p>The greatest thing you’ll ever learn is just to love, and be loved in return</p>
            </header>
            <footer class="homePage__footer">
                <div class="homePage__footer__button" @click="trueFloat">
                    <i class="iconfont icon-icon-"></i>
                </div>
            </footer>
        </div> 
        <addOrder :floatIndex="floatIndex"/>
    </div>
</template>

<script>
import addOrder from './addOrder'
export default {
    name:'homePage',
    data(){
        return {
            floatIndex:0,
        }
    },
    methods:{
        trueFloat(){
            this.floatIndex = (Math.random() + Math.random() * 0.1) * 10;
        }
    },
    components:{
        addOrder
    }
}
</script>
<style lang='scss' scoped>
    .homePage{
        &__header{
            padding:10px;
            img{
                width:100%;
            }
            p{
                font-size:12px;
                line-height: 20px;
            }
        }

        &__footer{
            position: absolute;
            bottom: 0;
            width:100%;
            height:40px;
            background-color: rgb(244,241,242);
            &__button{
                position: fixed;
                left:50%;
                margin-top:-6%;
                margin-left:-7%;
                box-sizing: border-box;
                border-radius: 50%;
                padding:4px;
                background-color: #fff;
                i{
                    font-size:38px;
                }
            }
        }
    }
    
</style>