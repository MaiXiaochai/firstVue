<template>
    <div id="mine">
        <h2>联系我们</h2>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        beforeRouteEnter(to, from, next) {
            console.log('Mine：进入之前调用');
            next();
        },

        beforeRouteUpdate(to, from, next) {
            console.log('Mine：参数变了');
            next();
        },
        beforeRouteLeave(to, from, next) {
            console.log('Mine：离开之前调用');
            next();
        },
    }
</script>

<style scoped>
    #mine {
        width: 300px;
        height: 500px;
        background-color: orange;
        margin: 0 auto;
    }
    h2 {
        color: red;
    }
</style>
