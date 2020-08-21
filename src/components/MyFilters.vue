<template>
    <div>
        MyFilters
        <h3>格式化货币</h3>
        <p>本地过滤器：</p>
        <p>{{money | currencyFormat}}</p>
        <p>全局过滤器：</p>
        <p>{{money | globalCurrencyFormat}}</p>
    </div>
</template>

<script>
    export default {
        name: "MyFilters",
        data() {
            return {
                money: 50000,
            }
        },
        // 钩子
        // 局部过滤器
        filters: {
            currencyFormat(value) {
                // toFixed 把 Number 四舍五入为指定小数位数的数字
                return '￥' + Number(value).toFixed(2);
            }
        }
    }
</script>

<style scoped>

</style>
