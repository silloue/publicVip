<template>
    <div :class="`addOrder ` + float" v-model="floatIndex">
        <div :class="`addOrder__list container ` + float">
            <h3 class="col-xs-12 addOrder__title">Add Items</h3>
            <div class="col-xs-12 addOrder__name">
                <i class="iconfont icon-icon-test"></i>
                <input type="text" placeholder="Please Enter Name"/>
            </div>
            <textarea name="http"  cols="30" rows="10" class="col-xs-12 addOrder__heperLink" placeholder=" HeperLink" v-model="price"></textarea>
            <div class="col-xs-12 addOrder__adress">
                <i class="iconfont icon-shouhuodizhi"></i>
                <input type="text" placeholder="Receiving address"/>
            </div>
            <div class="col-xs-12 addOrder__price">
                <i class="iconfont icon-jiagechaxun"></i>
                <input type="text" disabled :value="finalPrice"/>
            </div>
            <footer class="addOrder__button col-xs-12">
                <button @click="sure">确认支付</button>
                <button @click="close">取消</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name:'addOrder',
    data() {
        return {
            float:'float',
            floatInent: this.$props.floatIndex,
            price:'',
            finalPrice:''
        }
    },
    props:{
        floatIndex:{
            type:Number
        }
    },
    created(){
        
    },
    methods:{
        close(){
            this.float = 'float';
            this.price = '';
            this.finalPrice = '';
        },
        sure(){
            alert('支付成功');
            this.float = 'float';
        }
    },
    watch:{
        floatIndex(){
            if(this.floatIndex){
                this.float = '';
            }
        },
        price(){ 
                this.$http.get('/api/getPrice',{
                    params:{
                        newUrl:this.price
                    }
                },{emluateJSON:true}).then((val) => {
                    console.log(val.body.price)
                    this.finalPrice = val.body.price;
                })
        }
    }
}
</script>
<style lang='scss' scoped>
@import url("../../../node_modules/bootstrap/dist/css/bootstrap.css");
    .float{
        display: none;
        
    }
    .addOrder{
        &__list{
            position: fixed;
            top:2%;
            left:6%;
            width:88%;
            background-color: #fff;
            min-height: calc(100% - 160px);
            height: calc(100% - 120px);
        }

        &__title{
            margin-top:11%;

        }

        &__name{
            margin-top:10%;
            display: flex;
            i{  
                width:27px;
                padding:4px;
                color:rgb(67,149,255);
                border:1px solid rgb(67,149,255);
                border-radius: 50%;
            }
            input{
                flex:3;
                margin-left:8%;
                border:0;
                border-bottom: 1px solid #ededed;
                padding:0 0 4px 4px;
                color:#cdcdcd;
                font-size:13px;
            }
        }

         &__adress{
            margin-top:10%;
            display: flex;
            i{  
                width:27px;
                padding:4px;
                font-size:20px;
                color:rgb(67,149,255);
                border-radius: 50%;
            }
            input{
                 flex:3;
                margin-left:8%;
                border:0;
                border-bottom: 1px solid #ededed;
                padding:0 0 4px 4px;
                color:#cdcdcd;
                font-size:13px;
            }
        }

        &__price{
            margin-top:10%;
            display: flex;
            i{  
                width:27px;
                padding:4px;
                color:rgb(67,149,255);
                border-radius: 50%;
                font-size:20px;
            }
            input{
                flex:3;
                margin-left:8%;
                border:0;
                padding:0 0 4px 4px;
                color:#f40;
            }
        }

        &__heperLink{
            margin:3% 0 0 25%;
            width:70%;
            height:80px;
            background-color: #efefef;
            padding:0;
            font-size:12px;
        }

        &__button{
            margin-top:20%;
            display: flex;
            button:nth-child(1){
                flex:1;
                margin-right:5%;
                background-color:rgb(67,149,255);
                color:#fff
            }
            button:nth-child(2){
                flex:1;
                margin-left:5%;
                background-color:rgb(244,241,242)
            }
            button{
                border:0;
                height:28px;
                font-size:14px;
                outline: none;
            }
        }
    }
</style>