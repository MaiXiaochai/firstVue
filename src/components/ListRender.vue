<template>
    <div>
        <h3>遍历数组</h3>
        <ul>
            <li v-for="(person, index) in persons" :key="personKeys[index]">
                ID: {{personKeys[index]}} 姓名：{{person.name}}, 年龄：{{person.age}}, 性别：{{person.gender}}
            </li>
        </ul>

        <h3>遍历对象</h3>
        <ul>
            <li v-for="(item, key) in persons[0]">
            <!--name--张三
                age--18
                gender--男
            -->
                {{key}}--{{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import shortId from 'shortid'

    export default {
        name: "ListRender",
        data() {
            return {
                persons: [
                    {name: '张三', age: '18', gender: '男'},
                    {name: '李四', age: '28', gender: '女'},
                    {name: '王五', age: '38', gender: '男'},
                    {name: '赵六', age: '48', gender: '女'},
                    {name: '诸葛', age: '58', gender: '男'}
                ],
                // personKeys 用于生成与persons中数量匹配的ID,
                // 使用声明周期中的钩子--created,当整个组件或者钩子都渲染完成之后，被调用
                // mounted 方法也一样
                personKeys: []
            }
        },
        mounted() {
            // map 和 Python 的 map 作用类似，也是遍历，然后将值传送给函数，这里的箭头函数就是 Python中的 lambda 函数
            this.personKeys = this.persons.map(v => shortId.generate())
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>
