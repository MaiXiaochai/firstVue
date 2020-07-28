<template>
    <div>
        <h3>class的使用</h3>
        <div :class="oneClass">样式类使用字符串</div>
        <div :class="{classOne: true, classTwo: true}">样式类使用对象</div>
        <div :class="['classOne', 'classTwo']">样式类使用数组，方式一</div>
        <div :class="[oneClass, twoClass]">样式类使用数组，方式二</div>
        <div :class="[oneClass, 'classTwo']">样式类使用数组，方式三</div>
        <br>
        <hr>
        <br>
        <h3>style的使用</h3>
        <div
                style="width: 300px; height: 200px; margin: 10px auto;"
                :style="{backgroundColor: bgColor, fontSize: fSize}"
        >样式可以是字符串</div>

    </div>
</template>

<script>
    export default {
        name: "ClassAndStyle",
        data() {
            return {
                oneClass: 'classOne',
                twoClass: 'classTwo',
                bgColor: 'red',
                fSize: '30px'
            }
        }
    }
</script>

<style scoped>
    .classOne {
        font-size: 20px;
        color: red;
    }

    .classTwo {
        width: 400px;
        height: 200px;
        background-color: deepskyblue;
        margin: 10px auto;
    }
</style>
