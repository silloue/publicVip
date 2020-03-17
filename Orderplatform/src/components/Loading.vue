<template>
    <div class="loading">
        <div class="loading__animation">
            <img src="../assets/two.png"  class="two">
            <img src="../assets/back.png"  class="back">
            <img src="../assets/one.png"  class="one">
            <img src="../assets/three.png"  class="three">
            <span>Loading.....</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style lang='scss' scoped>

    .loading{
        &__animation{
            position: absolute;
            top:40%;
            left:50%;
            margin-left:-50px;
            span{
                line-height: 240px;
                text-align: center;
                margin-left:15%;
            }
        }
    }



    .back{
        width:100px;
        position: absolute;
    }
    .one{
        width:57px;
        margin-left:41px;
        margin-top:0px;
        position: absolute;
        animation: Moveback 2s linear infinite;
        z-index: 999;
    }
    .two{
        width:100px;
        margin-top:12px;
        position: absolute;
        z-index:99;
        animation: Movetwo 2s linear infinite;
    }

    .three{
        width:47px;
        margin-top:73px;
        margin-left:43px;
        position: absolute;
        animation: Movethree 2s linear infinite;
    }


    @keyframes Moveback{
        0%{
            margin-top:0;
        }
        50%{
            margin-top:10px;
        }
        100%{
            margin-top:0px;
        }
    }


    @keyframes Movetwo{
        0%{
            margin-top:12px;
        }
        50%{
            margin-top:8px;
        }
        100%{
            margin-top:12px;
        }
    }


    @keyframes Movethree{
        0%{
            width:43px;
        }
        50%{
            width:50px;
        }
        100%{   
            width:43px;
        }
    }
</style>