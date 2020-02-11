const linuxData = [
    {
        id: uuid.v4(),
        name: 'Linux',
        children: [
            {
                id: uuid.v4(),
                name: 'Linux',
                data: [
                    {
                        title: '鳥哥的私房菜',
                        link: 'http://linux.vbird.org/',
                        tags: ['Linux'],
                    },
                ],
                children: [],
            },
        ],
    },
    {
        id: uuid.v4(),
        name: 'Docker',
        children: [
            {
                id: uuid.v4(),
                name: 'Docker',
                data: [
                    {
                        title: 'Docker',
                        link: 'https://www.docker.com/',
                        tags: ['Docker', 'Server'],
                    }
                ],
                children: [],
            }
        ]
    }
]

export { linuxData }