<template>
    <div>
        Computed And Watch <br>
        <label>姓：<input type="text" placeholder="请输入姓氏" v-model="firstName"></label><br>
        <label>名：<input type="text" placeholder="请输入名" v-model="lastName"></label>
        <p>---------------------------------------------------------------------------</p>
        单向绑定 <br>
        <label>姓名：<input type="text" placeholder="请输入姓名" v-model="fullNameOne"></label>

        <p>---------------------------------------------------------------------------</p>
        双向绑定-computed <br>
        <label>姓名：<input type="text" placeholder="请输入姓名" v-model="fullNameTwo"></label>

        <p>---------------------------------------------------------------------------</p>
        双向绑定-watch <br>
        <label>姓名：<input type="text" placeholder="请输入姓名" v-model="fullNameWatch"></label>
    </div>
</template>

<script>
    export default {
        name: "ComputedAndWatch",
        data(){
            return {
                firstName: '', // 姓
                lastName: '', // 名
                fullNameWatch: '',  // 被watch监听
            }
        },
        // 配置计算属性
        computed: {
        //    计算属性 姓名
            fullNameOne: {
                get() {
                    return this.firstName + '·' + this.lastName
                }
            },
            fullNameTwo: {
                get() {
                    // console.log('调用了fullNameTwo的getter方法');
                    return this.firstName + '·' + this.lastName
                },
                set(value) {
                    // console.log('调用了 fullNameTwo 的 setter 方法，value：${value}');
                    let name = value.split('·');
                    console.log(name);
                    this.firstName = name[0];
                    this.lastName = name[1];
                }
            }
        },

        // 配置侦听器
        watch: {
            //   监听firstName,
            firstName(value){
                console.log(`watch 监听到firstName发生改变：${value}`);
                this.fullNameWatch = value + '·' + this.lastName;
            },
            //   监听lastName,
            lastName(value){
                console.log(`watch 监听到lastName发生改变：${value}`);
                this.fullNameWatch = this.lastName + '·' + value;
            },
        }
    }
</script>

<style scoped>

</style>
