const cssData = [
    {
        id: uuid.v4(),
        name: 'CSS',
        children: [
            {
                id: uuid.v4(),
                name: 'SASS',
                data: [
                    {
                        title: 'SASS',
                        link: 'https://sass-lang.com/',
                        tags: ['CSS', 'SASS', 'SCSS'],
                        badge: 'Hot',
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'UI',
                data: [
                    {
                        title: 'Bootstrap',
                        link: 'https://getbootstrap.com/',
                        tags: ['CSS', 'SCSS', 'UI Framework'],
                    }
                ],
                children: [],
            },
        ],
    },
]

export { cssData }