<template>
    <div> 
        <Loading :class="load"/> 
        <div :class="afterLoad + ` carPage`">
            <ul>
                <li v-for="item of list" :key="item.id">
                    <img :src="item.img">
                    <span>{{item.discrible}}</span>
                </li>
            </ul>
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
            list:[
                {id:'1', img:'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2017/10/24/12/6c3c3a67-b0bf-4578-8535-98205d092b5f_720x909_70.jpg!85.webp',discrible:'卡迪黛尔 | CADIDL时尚收腰系带中长款羊毛呢子大衣 '},
                {id:'2',img:"https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/111601/2020/0219/135/6ef7fa81-41fb-40ad-8cd0-da1b929513b1_720x909_70.jpg!85.webp",discrible:'LAVI | 女童装20春新款时尚牛仔裤百搭九分裤儿童裤子'},
                {id:'3',img:'https://h2a.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/01/29/196/2cb6c988-8980-4608-b7b1-3940fb136dbc_720x909_70.jpg!85.webp',discrible:'LAVI | 女童马骑顿童装夏装新款中大儿童裤子休闲牛仔七分裤'}
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
    .carPage{
        ul{
            list-style: none;
            width:100%;
            padding:0;
            li{
                width:88%;
                margin-left:6%;
                margin-top:12px;
                height:14vh;
                border:1px solid rgba(111,111,111,0.7);
                border-radius: 8px 8px 8px 8px;
                box-sizing: border-box;
                img{
                    height: 80%;
                    margin-top:3%;
                    float:left;
                    margin-left:10px;
                    border-radius: 4px 4px 4px 4px;
                    margin-right:20px;
                }
                span{
                    display: block;
                    margin-top:15px;
                    text-align: left;
                    font-size:12px;
                    line-height: 26px;
                    margin-right:10px;
                }
            }
        }
    }
    .waitLoading{
        display: none;
    }
</style>