<template>
    <div>
        <p>生命周期组件</p>
        <p v-if="isShow">{{str1}}</p>
        <p v-else>{{str2}}</p>
        <button @click="destroy">销毁</button>

    </div>
</template>

<script>
    export default {
        name: "LifeCircle",
        beforeCreate() {
            console.log('1: beforeCreate');
        },
        data() {
            return {
                isShow: false,
                str1: 'maixiaochai',
                str2: 'first-vue'
            }
        },
        methods: {
            destroy() {
                // this 代表当前的实例，这里记得在销毁之前清除掉计时器
                this.$destroy();
            }
        },
        created() {
            console.log('2: Created');
        },
        beforeMount() {
            console.log('3: beforeMount');
        },
        mounted() {
            console.log('4: mount');
            this.intervalShow = setInterval(()=> {
                console.log('+++++++++++++++');
                this.isShow = !this.isShow;
            }, 1000)
        },
        beforeUpdate() {
            console.log('5: beforeUpdate');
        },
        updated() {
            console.log('6: updated');
        },
        beforeDestroy() {
            console.log('7: beforeDestroy');
            // 销毁前，清除计时器
            clearInterval(this.intervalShow);
        },
        destroyed() {
            console.log('8: destroyed');
        }
    }
</script>

<style scoped>

</style>
