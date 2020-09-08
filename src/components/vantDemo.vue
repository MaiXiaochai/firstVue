<template>
    <div>
        <van-button class="btn" type="primary">主要按钮</van-button>
        <van-button class="btn" type="info">信息按钮</van-button>
        <van-button class="btn" type="default">默认按钮</van-button>
        <van-button class="btn" type="warning">警告按钮</van-button>
        <van-button class="btn" type="danger">危险按钮</van-button>

        <van-datetime-picker
                v-model="currentDate"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
        ></van-datetime-picker>
    </div>
</template>

<script>
    export default {
        name: "vantDemo",
        data() {
            return {
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
            };
        },
    }

</script>

<style scoped>
    .btn {
        margin: 10px;
    }
</style>
