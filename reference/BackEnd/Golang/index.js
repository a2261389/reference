const goData = [
    {
        id: uuid.v4(),
        name: 'Golang',
        tags: [
            'Golang'
        ],
        children: [
            {
                id: uuid.v4(),
                name: 'Golang',
                tags: [
                    'Golang',
                ],
                data: [
                    {
                        title: 'Golang',
                        link: 'https://golang.org/',
                        badge: 'Hot',
                    },
                ],
                children: [],
            },
        ],
    },
]

export { goData }