const cssData = [
    {
        id: uuid.v4(),
        name: 'CSS',
        children: [
            {
                id: uuid.v4(),
                name: 'SASS/SCSS',
                data: [
                    {
                        title: 'SCSS',
                        link: 'https://sass-lang.com/',
                        tags: ['CSS', 'SCSS'],
                    },
                    {
                        title: 'SASS Cheat Sheet',
                        link: 'https://devhints.io/sass',
                        tags: ['CSS', 'SCSS', 'SASS'],
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