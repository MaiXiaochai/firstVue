<template>
    <div id="mine">
        <p>联系我们</p>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        props: ['name', 'gender', 'height']
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
