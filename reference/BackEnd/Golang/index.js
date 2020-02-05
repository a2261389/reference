const goData = [
    {
        id: uuid.v4(),
        name: 'Golang',
        children: [
            {
                id: uuid.v4(),
                name: 'Golang',
                data: [
                    {
                        title: 'Golang',
                        link: 'https://golang.org/',
                        tags: ['Golang'],
                        badge: 'Hot',
                    },
                ],
                children: [],
            },
        ],
    },
]

export { goData }