<template>
    <router-link to="/sign"></router-link>
</template>

<script>
export default {
    name:'globalCog',
    created(){
        if(window.screen.width >= 450){
            window.location.href="https://www.baidu.com"
        }else{
            this.$router.push("/sign");
        }
    }
}
</script>
<style lang='scss' scoped>

</style>