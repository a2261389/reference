const jsData = [
    {
        id: uuid.v4(),
        name: 'JavaScript',
        data: [
            {
                title: 'MDN - JavaScript',
                link: 'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript',
                tags: ['JavaScript'],
            }
        ],
    },
    {
        id: uuid.v4(),
        name: 'TypeScript',
        data: [
            {
                title: 'TypeScript Tutorial (簡中)',
                link: 'https://jkchao.github.io/typescript-book-chinese/',
                tags: ['JavaScript', 'TypeScript'],
            },
            {
                title: 'React TypeScript Cheat Sheet',
                link: 'https://github.com/typescript-cheatsheets/react-typescript-cheatsheet',
                tags: ['JavaScript', 'ReactJS', 'TypeScript'],
            },
        ],
    },
    {
        id: uuid.v4(),
        name: '打包、套件管理',
        data: [
            {
                title: 'Polyfill',
                link: 'https://polyfill.io/v3/url-builder/',
                tags: ['JavaScript', 'polyfill'],
            },
            {
                title: 'coreJS',
                link: 'https://github.com/zloirock/core-js',
                tags: ['JavaScript', 'coreJS'],
            },
            {
                title: 'Webpack(簡中)',
                link: 'https://www.webpackjs.com/concepts/',
                tags: ['JavaScript', 'Webpack'],
            },
            {
                title: 'NPM/Yarn Cheat Sheet',
                link: 'https://github.com/areai51/yarn-cheatsheet',
                tags: ['JavaScript', 'NPM', 'Yarn'],
            },
        ],
    },
    {
        id: uuid.v4(),
        name: 'VueJS',
        children: [
            {
                id: uuid.v4(),
                name: 'VueJS',
                data: [
                    {
                        title: 'VueJS',
                        link: 'https://vuejs.org',
                        badge: 'Hot',
                        tags: ['JavaScript', 'VueJS', 'Framework'],
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Vue Router',
                data: [
                    {
                        title: 'Vue Router',
                        link: 'https://router.vuejs.org/',
                        tags: ['JavaScript', 'VueJS', 'Router'],
                    }
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Vuex',
                data: [
                    {
                        title: 'Vuex',
                        link: 'https://vuex.vuejs.org/',
                        tags: ['JavaScript', 'VueJS', 'Data Flow'],
                    }
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'UI',
                data: [
                    {
                        title: 'Vuetify',
                        link: 'https://vuetifyjs.com/en/',
                        tags: ['JavaScript', 'VueJS', 'UI'],
                    },
                    {
                        title: 'Element UI',
                        link: 'https://element.eleme.io/#/zh-CN',
                        tags: ['JavaScript', 'VueJS', 'UI'],
                    },
                    {
                        title: 'BootstrapVue',
                        link: 'https://bootstrap-vue.js.org',
                        tags: ['JavaScript', 'VueJS', 'UI', 'Bootstrap'],
                    },
                    {
                        title: 'View UI',
                        link: 'https://www.iviewui.com/docs/introduce',
                        tags: ['JavaScript', 'VueJS', 'UI'],
                    },
                    {
                        title: 'Ant Design Vue',
                        link: 'https://www.antdv.com/docs/vue/introduce/',
                        tags: ['JavaScript', 'VueJS', 'UI'],
                    },
                ],
                children: [],
            }
        ],
    },
    {
        id: uuid.v4(),
        name: 'ReactJS',
        children: [
            {
                id: uuid.v4(),
                name: 'ReactJS',
                data: [
                    {
                        title: 'ReactJS',
                        link: 'https://zh-hant.reactjs.org/',
                        tags: ['JavaScript', 'ReactJS'],
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Redux',
                data: [
                    {
                        title: 'Redux',
                        link: 'https://redux.js.org/',
                        tags: ['JavaScript', 'ReactJS', 'Data Flow'],
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'React Router',
                data: [
                    {
                        title: 'React Router',
                        link: 'https://reacttraining.com/react-router/',
                        tags: ['JavaScript', 'ReactJS', 'Router'],
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'UI',
                data: [
                    {
                        title: 'Material UI',
                        link: 'https://material-ui.com/zh/getting-started/usage/',
                        tags: ['JavaScript', 'ReactJS', 'UI'],
                    },
                    {
                        title: 'React Bootstrap',
                        link: 'https://react-bootstrap.github.io/',
                        tags: ['JavaScript', 'ReactJS', 'Bootstrap', 'UI'],
                    },
                ],
                children: [],
            },

        ],
    },
]

export { jsData }