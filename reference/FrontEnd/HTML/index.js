const htmlData = [
    {
        id: uuid.v4(),
        name: 'HTML',
        tags: [
            'HTML',
        ],
        children: [
            {
                id: uuid.v4(),
                name: 'HTML',
                tags: [
                    'HTML',
                ],
                data: [
                    {
                        title: 'MDN - HTML',
                        link: 'https://developer.mozilla.org/zh-TW/docs/Web/HTML',
                    },
                    {
                        title: 'W3C School - HTML',
                        link: 'https://www.w3schools.com/html/',
                    }
                ],
                children: [],
            },
        ],
    },
]

export { htmlData }