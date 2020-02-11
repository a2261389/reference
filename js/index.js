import { data } from '../reference/data.js'
import './components/sidebar/index.js'

new Vue({
    el: '#app',
    data: () => {
        return {
            references: data,
            select: '',
            filterItems: [],
            searchText: '',
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
        getAllData(data, temp, itemValue, itemType = 'id') {
            data.forEach((item) => {
                // 過濾沒有data的父標籤
                if (item.data !== undefined) {
                    if (!itemValue || (itemValue && itemValue === item[itemType])) {
                        item.data.forEach((data) => {
                            temp.push({ ...data })
                        })
                    }
                }
                if (item.children && item.children.length) {
                    return this.getAllData(item.children, temp, itemValue, itemType)
                }
            })
            return temp
        },
        getSearchData(data, temp, itemValue, itemType = 'title') {
            data.forEach((item) => {
                if (item.data !== undefined) {
                    item.data.forEach((data) => {
                        if (Array.isArray(data[itemType])) {
                            if (data[itemType].indexOf(itemValue) !== -1) {
                                temp.push({ ...data })
                            }
                        } else if (itemValue === data[itemType]) {
                            temp.push({ ...data })
                        }
                    })
                }
                if (item.children && item.children.length) {
                    return this.getSearchData(item.children, temp, itemValue, itemType)
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
        },
        querySearch(queryString, cb) {
            let filterItems = this.getAllData(this.references, []).sort(this.sortElement)
            let results = queryString ? filterItems.filter(this.createFilter(queryString)) : filterItems
            cb(results)
        },
        createFilter(queryString) {
            return filterItems => filterItems.title.toLowerCase().includes(queryString.toLowerCase())
        },

        handleSelect(item) {
            this.searchText = item.title
            this.filterItems = this.getSearchData(this.references, [], item.title, 'title').sort(this.sortElement)
        },
        handleClean(e) {
            this.searchText = ''
            this.selectToAllTab()
        },
        handleSelectTag(tag) {
            this.filterItems = this.getSearchData(this.references, [], tag, 'tags').sort(this.sortElement)
        }
    }
})