const jsData = [
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
                        title: 'VueJS官網',
                        link: 'https://vuejs.org',
                        badge:'Hot',
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
                    'FrameWork'
                ],
                data: [
                    {
                        title: 'VueRouter官網',
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
                    'FrameWork'
                ],
                data: [
                    {
                        title: 'Vuex官網',
                        link: 'https://vuex.vuejs.org/',
                    }
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
            'VueJS',
            'FrameWork'
        ],
        children: [
            {
                id: uuid.v4(),
                name: 'ReactJS',
                tags: [
                    'JavaScript',
                    'VueJS',
                    'FrameWork'
                ],
                data: [
                    {
                        title: 'ReactJS官網',
                        link: 'https://zh-hant.reactjs.org/',
                    }
                ],
                children: [],
            }
        ],
    },
]

export { jsData }