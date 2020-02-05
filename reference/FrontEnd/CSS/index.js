const cssData = [
    {
        id: uuid.v4(),
        name: 'CSS',
        tags: [
            'CSS',
        ],
        children: [
            {
                id: uuid.v4(),
                name: 'SASS',
                tags: [
                    'CSS',
                    'SASS',
                ],
                data: [
                    {
                        title: 'SASS',
                        link: 'https://sass-lang.com/',
                        badge: 'Hot',
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'UI',
                tags: [
                    'CSS',
                ],
                data: [
                    {
                        title: 'Bootstrap',
                        link: 'https://getbootstrap.com/',
                    }
                ],
                children: [],
            },
        ],
    },
]

export { cssData }