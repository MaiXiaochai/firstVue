<template>
    <div>
        <p>过渡和动画组件</p>
        <button @click="show=!show">切换</button>
        <transition name="fade">
            <div class="box" v-if="show">maixiaochai</div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "TransitionDemo",
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style scoped>
    .box{
        width: 200px;
        height: 200px;
        background-color: red;
        color: #FFFFFF;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateX(200px);
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 2s ease-in-out;
    }
</style>
