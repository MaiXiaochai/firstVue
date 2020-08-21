<template>
    <div>
        <p>This is demo components.</p>
        <!-- @ = v-on -->
        <button @click="clickBtn('Maixiaochai', $event)">点击</button>
        
        <h3>事件修饰符</h3>
        <a href="https://github.com/MaiXiaochai" @click.prevent="aClick">Maixiaochai</a>
        <div style="width: 100px; height: 100px; background-color: red;" @click="divClick">
            <button @click.stop="btnClick">冒泡</button>
        </div>

        <h3>按键修饰符</h3>
        <input type="text" @keyup.enter="delkey">

    </div>
</template>

<script>
    export default {
        name: "DemoEvent",
        methods: {
            clickBtn(args, event) {
                console.log(args);
                console.log(event);
            },
            aClick() {
                alert(0);
            },
            btnClick() {
                alert('点击了里面的按钮');
            },
            divClick() {
                alert('点击了父标签');
            },
            delkey() {
                alert('按键 up');
            },
        }
    }
</script>

<style scoped>

</style>
