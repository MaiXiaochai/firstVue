<template>
    <div>
        <div>
            <h3>排序</h3>
            <button @click="orderByAge(0)">默认</button>
            <button @click="orderByAge(1)">年龄↑</button>
            <button @click="orderByAge(2)">年龄↓</button>
        </div>
        <hr>
        <h3>搜索列表</h3>
        <label>
            <input type="text" placeholder="请输入要搜索的姓名" v-model="searchName">
            <ul>
                <li v-for="(person, index) in filterPersons" :key="personKeys[index]">
                    {{index + 1}}) 姓名：{{person.name}} 年龄：{{person.age}} 性别：{{person.gender}} 电话：{{person.phone}}
                </li>
            </ul>
        </label>
    </div>
</template>

<script>
    import shortId from 'shortid'

    export default {
        name: "ListFilterAndSort",
        data() {
            return {
                searchName: '',
                persons: [
                    {name: '张三', age: '18', gender: '男', phone: '13716337366'},
                    {name: '张三丰', age: '36', gender: '男', phone: '13722637366'},
                    {name: '李四', age: '28', gender: '女', phone: '13714567361'},
                    {name: '王五', age: '38', gender: '男', phone: '13717217346'},
                    {name: '赵六', age: '48', gender: '女', phone: '13714657341'},
                    {name: '诸葛', age: '58', gender: '男', phone: '13716525366'}
                ],
                personKeys: [],
                orderType: 0
            }
        },
        mounted() {
            // map 和 Python 的 map 作用类似，也是遍历，然后将值传送给函数，这里的箭头函数就是 Python中的 lambda 函数
            this.personKeys = this.persons.map(v => shortId.generate())
        },
        computed: {
            filterPersons() {
                /* 1. 获取数据
                    let {searchName, persons} = this
                    这是 ES6 语法，等价于
                     let searchName = this.searchName;
                     let persons = this.persons;
                 */
                let {searchName, persons, orderType} = this;

                /* 2. 取出数组中的数据
                    ..persons, 将 persons展开，将其中的所有可遍历内容放到 arr 中，
                    是对 persons 的一种浅拷贝，拷贝的是引用
                */
                let arr = [...persons];

                // 3. 过滤数组
                if (searchName.trim()) {
                    arr = persons.filter(p => p.name.indexOf(searchName) !== -1)
                }

                /* 排序
                    sort(function(a, b){
                        return a - b
                    }),
                    1) 当 a - b > 0时，a 在 b 前面，可以理解为，a 比 b 小，所以，a 在前边
                    2) 当 a - b < 0时，b 在 a 前面

                    sort() 具体讲解，https://www.6blog.cn/frontEnd/153
                */
                // 注意，在这里 0 为 false
                // 4. 排序
                if (orderType) {
                    arr.sort((p1, p2) => {
                        // 降序，大的在前边
                        if (orderType === 1) {
                            return p2.age - p1.age
                        // 升序，小的在前边
                        } else {
                            return p1.age - p2.age
                        }
                    })
                }

                return arr;
            }
        },
        methods: {
            orderByAge(orderType) {
                this.orderType = orderType;
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }

    ul li {
        padding: 10px 0;
    }
</style>
