<template>
  <div class="orderSignIn container">
    <div class="col-xs-12 orderSignIn__logo">
      <img src="../../assets/one.png" :class="animation" />
      <span :class="loadingInpost">Loading......</span>
    </div>
    <div :class="`col-xs-12 container orderSignIn__information ` + loading">
      <i class="iconfont icon-zhanghao col-xs-2"></i>
      <input type="text" name="username" class="col-xs-10" placeholder="用户名" v-model="username" />
      <i class="iconfont icon-mima col-xs-2"></i>
      <input type="text" name="password" class="col-xs-10" placeholder="密码" v-model="password" />
    </div>
    <div :class="`col-xs-12 orderSignIn__submit container ` + loading">
      <button class="col-xs-12" @click="submit">提交</button>
    </div>
    <footer class="container orderSignIn__footer">
      <div class="col-xs-6">用户须知</div>
      <div class="col-xs-6">意见反馈</div>
    </footer>
  </div>
</template>

<script>
export default {
    data (){
        return {
            username:'',
            password:'',
            loading:'',
            animation:'',
            loadingInpost:'DisNone'
        }
    },
    created(){
        window.addEventListener('keydown',this.handleKeyDown,true);
    },
    methods:{
        submit(){
                this.loading = 'loading';
                this.animation = 'animation';
                this.loadingInpost = 'startAnimation1 col-xs-12';
                this.$http.post('/api/sign',{
                    username:this.username,
                    password:this.password
                },{emluateJSON:true}).then((res)=>{
                  console.log(res.body.result)
                  if(res.body.result){
                       this.$router.push({
                         name:'mainpage',
                         params:{
                           pageIndex:1
                         }
                       }) 
                    }else{
                          this.$router.push('/');
                    }
                })
            // let animationFunc = new Promise((res,rej) => {
            //     this.loading = 'loading';
            //     this.animation = 'animation';
            //     this.loadingInpost = 'startAnimation1 col-xs-12';
            //     setTimeout(function () {
            //         res('http://localhost:8000/sign');
            //     },2000)
            // })
                
            // animationFunc.then( (val) => {
            //     this.$http.post(val,{
            //             username:this.username,
            //             password:this.password
            //     },{emluateJSON:true}).then((res)=>{
            //         if(res.body.result){
            //            this.$router.push({
            //              name:'mainpage',
            //              params:{
            //                pageIndex:1
            //              }
            //            }) 
            //         }else{
            //             this.$router.push('/')
            //         }
            //     })
            // },(reason) => {

            // })
            
        },
        handleKeyDown(e){
            let key = null;
            if (window.event === undefined) {
                key = e.keyCode
            } else {
                key = window.event.keyCode
            }
            if(key === 13){
                this.submit()
            }
        }
    }
}
</script>
<style lang='scss' scoped>
@import url("../../publicStyle/globalStyle.scss");
@import url("../../../node_modules/bootstrap/dist/css/bootstrap.css");

.loading {
  display: none;
}

.DisNone {
  display: none;
}
.startAnimation1 {
  margin-top: 3%;
  text-align: center;
  font-weight: 600;
}
.animation {
  animation: down 2s linear;
  animation-fill-mode: forwards;
}

@keyframes down {
  0% {
    margin-top: 40%;
  }
  50% {
    margin-top: 65;
  }
  100% {
    margin-top: 79%;
  }
}

.orderSignIn {
  margin: 0px;
  padding: 0px;
  background-image: url("../../assets/GloBalbackGround.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100px;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  &__logo {
    img {
      width: 28%;
      height: 89px;
      margin: 40% 33.5% 0 40%;
    }
  }

  &__information {
    position: relative;
    height: 36%;
    input:nth-child(2) {
      padding-left: 36px;
      position: absolute;
      width: 76%;
      height: 43px;
      top: 12%;
      left: 13%;
      // margin: 12% 0 0 13%;
      border: 0;
      outline-color: cornflowerblue;
      border-radius: 4px 4px 4px 4px;
      -moz-outline-radius: 4px 4px 4px 4px;
      opacity: 0.7;
    }
    input:nth-child(4) {
      padding-left: 36px;
      position: absolute;
      width: 76%;
      height: 43px;
      top: 50%;
      left: 13%;
      border: 0;
      outline-color: cornflowerblue;
      border-radius: 4px 4px 4px 4px;
      -moz-outline-radius: 4px 4px 4px 4px;
      opacity: 0.7;
    }
    i:nth-child(1) {
      position: absolute;
      top: 17.5%;
      left: 11.5%;
      font-size: 20px;
      z-index: 100;
    }
    i:nth-child(3) {
      position: absolute;
      top: 55.5%;
      left: 11.5%;
      font-size: 20px;
      z-index: 100;
    }
  }
  &__submit {
    width: 85%;
    margin: 0 0 0 8.5%;
    button {
      border: 0;
      height: 38px;
      border-radius: 5px 5px 5px 5px;
    }
  }
  &__footer {
    position: fixed;
    bottom: 20px;
    padding: 0px;
    color: #fff;
    text-align: center;
    font-size: 13px;
    width: 100%;
    div:nth-child(1) {
      width: 50%;
    }
    div:nth-child(2) {
      width: 50%;
    }
  }
}
</style>