<template>
    <div>
        <button @click="flag=!flag">切换</button>
        <p>Vue动画组件: AnimateDemo</p>

        <transition name="bounce">
            <img v-if="flag" :src="pic" alt="">
        </transition>
    </div>
</template>

<script>
    import pic from '../assets/bounce.jpg'
    export default {
        name: "AnimateDemo",
        data() {
            return {
                pic: pic,
                flag: false
            }
        }
    }
</script>

<style scoped>
    .bounce-enter-active {
        /* .5s 表示在 0.5s 内完成 */
        animation: bounce .5s;
    }
    .bounce-leave-active {
        /* reverse 反转， 可以理解为倒放 */
        animation: bounce .5s reverse;
    }
    @keyframes bounce {
        0% {
            transform: scale(0);
        }
        25% {
            transform: scale(0.25);
        }
        50% {
            transform: scale(0.5);
        }
        75% {
            transform: scale(0.75);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
