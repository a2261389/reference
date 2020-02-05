const phpData = [
    {
        id: uuid.v4(),
        name: 'PHP',
        tags: [
            'PHP',
        ],
        children: [
            {
                id: uuid.v4(),
                name: 'PHP',
                tags: [
                    'SQL',
                ],
                data: [
                    {
                        title: 'PHP',
                        link: 'https://www.php.net/',
                    }
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Composer',
                tags: [
                    'PHP',
                ],
                data: [
                    {
                        title: 'Composer',
                        link: 'https://getcomposer.org/',
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Laravel',
                tags: [
                    'PHP',
                ],
                data: [
                    {
                        title: 'Laravel',
                        link: 'https://laravel.com/docs/',
                    },
                ],
                children: [],
            },
        ],
    },
]

export { phpData }