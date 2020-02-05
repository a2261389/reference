const jsData = [
    {
        id: uuid.v4(),
        name: 'JavaScript',
        tags: [
            'JavaScript',
        ],
        data: [
            {
                title: 'MDN - JavaScript',
                link: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript',
            }
        ],
    },
    {
        id: uuid.v4(),
        name: 'VueJS',
        tags: [
            'JavaScript',
            'VueJS',
            'FrameWork'
        ],
        children: [
            {
                id: uuid.v4(),
                name: 'VueJS',
                tags: [
                    'JavaScript',
                    'VueJS',
                    'FrameWork'
                ],
                data: [
                    {
                        title: 'VueJS',
                        link: 'https://vuejs.org',
                        badge: 'Hot',
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Vue Router',
                tags: [
                    'JavaScript',
                    'VueJS',
                    'Vue Router',
                ],
                data: [
                    {
                        title: 'VueRouter',
                        link: 'https://router.vuejs.org/',
                    }
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Vuex',
                tags: [
                    'JavaScript',
                    'VueJS',
                    'Vuex',
                ],
                data: [
                    {
                        title: 'Vuex',
                        link: 'https://vuex.vuejs.org/',
                    }
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'UI',
                tags: [
                    'JavaScript',
                    'VueJS',
                    'UI'
                ],
                data: [
                    {
                        title: 'Vuetify',
                        link: 'https://vuetifyjs.com/en/',
                    },
                    {
                        title: 'Element UI',
                        link: 'https://element.eleme.io/#/zh-CN',
                    },
                    {
                        title: 'BootstrapVue',
                        link: 'https://bootstrap-vue.js.org',
                    },
                    {
                        title: 'View UI',
                        link: 'https://www.iviewui.com/docs/introduce',
                    },
                    {
                        title: 'Ant Design Vue',
                        link: 'https://www.antdv.com/docs/vue/introduce/',
                    },
                ],
                children: [],
            }
        ],
    },
    {
        id: uuid.v4(),
        name: 'ReactJS',
        tags: [
            'JavaScript',
            'ReactJS',
        ],
        children: [
            {
                id: uuid.v4(),
                name: 'ReactJS',
                tags: [
                    'JavaScript',
                    'ReactJS',
                ],
                data: [
                    {
                        title: 'ReactJS',
                        link: 'https://zh-hant.reactjs.org/',
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Redux',
                tags: [
                    'JavaScript',
                    'ReactJS',
                    'Redux'
                ],
                data: [
                    {
                        title: 'Redux',
                        link: 'https://redux.js.org/',
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'React Router',
                tags: [
                    'JavaScript',
                    'ReactJS',
                    'React Router',
                ],
                data: [
                    {
                        title: 'React Router',
                        link: 'https://reacttraining.com/react-router/',
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'UI',
                tags: [
                    'JavaScript',
                    'ReactJS',
                    'UI',
                ],
                data: [
                    {
                        title: 'Material UI',
                        link: 'https://material-ui.com/zh/getting-started/usage/',
                    },
                    {
                        title: 'React Bootstrap',
                        link: 'https://react-bootstrap.github.io/',
                    },
                ],
                children: [],
            },

        ],
    },
]

export { jsData }