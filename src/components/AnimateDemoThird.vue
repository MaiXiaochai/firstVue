<template>
    <div>
        <button @click="show = !show">
            切换
        </button>
        <p>第三方动画插件集成</p>
        <!--
            而是使用一些特定的属性
        -->
        <transition
            enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounceOutRight"

        >
            <img v-if="show" :src="myPic" alt="gitPics">
        </transition>
    </div>
</template>

<script>
    import 'animate.css'
    import pic from '../assets/bounce.jpg'
    export default {
        name: "AnimateThird",
        data() {
            return {
                myPic: pic,
                show: true
            }
        }
    }
</script>

<style scoped>

</style>
