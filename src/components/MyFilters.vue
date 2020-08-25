<template>
    <div>
        MyFilters
        <h3>格式化货币</h3>
        <p>本地过滤器：</p>
        <p>{{money | currencyFormat}}</p>
        <p>全局过滤器：</p>
        <p>{{money | globalCurrencyFormat}}</p>

        <p>日期格式化</p>
        <p>{{time | timeFormat}}</p>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: "MyFilters",
        data() {
            return {
                money: 50000,
                time: new Date()
            }
        },
        // 钩子
        // 局部过滤器
        filters: {
            currencyFormat(value) {
                // toFixed 把 Number 四舍五入为指定小数位数的数字
                return '￥' + Number(value).toFixed(2);
            },
            timeFormat(value, format='YYYY-MM-DD HH:mm:ss') {
                return moment(value).format(format);
            }
        }
    }
</script>

<style scoped>

</style>
