<template>
    <div>
        <!--   v-if/v-else     -->
        <div v-if="flag">今晚上课！</div>
        <div v-else>今晚不上课！</div>
        <!-- @click = v-on:click     -->
        <hr>

        <!--   v-show    -->
        <div v-show="flag">今晚吃火龙果！</div>
        <div v-show="!flag">今晚不吃火龙果！</div>
        <!-- @click = v-on:click     -->
        <p></p>
        <button @click="flag= !flag">切换按钮</button>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "IfAndShow",
        data() {
            return {
                flag: true, // true,上课; false, 不上课
            }
        }
    }
</script>

<style scoped>

</style>
