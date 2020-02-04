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
                        title: 'PHP官網',
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
                        title: 'Composer官網',
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
                        title: 'Laravel官網',
                        link: 'https://laravel.com/docs/',
                    },
                ],
                children: [],
            },
        ],
    },
]

export { phpData }