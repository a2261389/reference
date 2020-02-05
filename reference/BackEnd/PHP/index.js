const phpData = [
    {
        id: uuid.v4(),
        name: 'PHP',
        children: [
            {
                id: uuid.v4(),
                name: 'PHP',
                data: [
                    {
                        title: 'PHP',
                        link: 'https://www.php.net/',
                        tags: ['PHP'],
                    }
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Composer',
                data: [
                    {
                        title: 'Composer',
                        link: 'https://getcomposer.org/',
                        tags: ['PHP', 'Dependency Manager'],
                    },
                ],
                children: [],
            },
            {
                id: uuid.v4(),
                name: 'Laravel',
                data: [
                    {
                        title: 'Laravel',
                        link: 'https://laravel.com/docs/',
                        tags: ['PHP', 'Framework'],
                    },
                ],
                children: [],
            },
        ],
    },
]

export { phpData }