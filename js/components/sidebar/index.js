

let sideBar = `
        <div>
            <el-menu v-for="(item, index) in items" :key="index">
                <el-submenu :index="item.id">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{ item.name }}</span>
                    </template>
                    <el-menu-item-group>
                            <side-bar-child :items="item.children" v-if="item.children && item.children.length" v-on:getChildSelectById="getChildId">
                            </side-bar-child>
                            <el-menu-item :index="item.id" v-else>
                                {{ item.name }}
                            </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        `
let sideBarChild = `
            <div>
                <div v-for="(item, index) in items" :key="index">
                    <el-submenu :index="item.id" v-if="item.children && item.children.length">
                        <template slot="title">
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item-group>
                                <side-bar-child :items="item.children" v-if="item.children && item.children.length" v-on:getChildSelectById="getChildId">
                                </side-bar-child>
                                <el-menu-item :index="item.id" v-else @click="getSelectById(item.id)">
                                    {{ item.name }}
                                </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item :index="item.id" :key="index" v-else @click="getSelectById(item.id)">
                        {{ item.name }}
                    </el-menu-item>
                </div>
            </div>
            `
Vue.component('side-bar', {
    props: ['items'],
    template: sideBar,
    methods: {
        getChildId(id) {
            this.$emit('side-bar-select-id', id)
        },
    }
})

Vue.component('side-bar-child', {
    props: ['items'],
    template: sideBarChild,
    methods: {
        getSelectById(id) {
            this.$emit('getChildSelectById', id)
        },
        getChildId(id) {
            this.$emit('getChildSelectById', id)
        }
    }
})
