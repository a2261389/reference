import { data } from '../reference/data.js'
import './components/sidebar/index.js'

const vm = new Vue({
    el: '#app',
    data: () => {
        return {
            references: data,
            select: '',
            filterItems: [],
        }
    },
    mounted() {
        this.filterItems = this.getAllData(this.references, [])
    },
    methods: {
        selectToAllTab() {
            this.select = ''
            this.filterItems = this.getAllData(this.references, [])
        },
        getSideBarSelectId(id) {
            this.filterItems = this.getAllData(this.references, [], id)
        },
        // No level
        getAllData(data, temp, searchItemId) {
            data.forEach((item) => {
                // 過濾沒有data的父標籤
                if (item.data !== undefined) {
                    if (!searchItemId || (searchItemId && searchItemId === item.id)) {
                        item.data.forEach((data) => {
                            temp.push({
                                title: data.title,
                                link: data.link,
                                badge: data.badge || null
                            })
                        })
                    }
                }
                if (item.children && item.children.length) {
                    return this.getAllData(item.children, temp, searchItemId)
                }
            })
            return temp
        }
    }
})