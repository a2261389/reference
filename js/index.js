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
        this.filterItems = this.getAllData(this.references, []).sort(this.sortElement)
    },
    methods: {
        selectToAllTab() {
            this.select = ''
            this.filterItems = this.getAllData(this.references, []).sort(this.sortElement)
        },
        getSideBarSelectId(id) {
            this.filterItems = this.getAllData(this.references, [], id).sort(this.sortElement)
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
        },
        sortElement(a, b) {
            let elementA = a['title'].toString().toUpperCase()
            let elementB = b['title'].toString().toUpperCase()
            if (elementA > elementB) {
                return 1
            }
            if (elementA < elementB) {
                return -1
            }

            return 0
        }
    }
})