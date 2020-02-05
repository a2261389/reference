const htmlData = [
    {
        id: uuid.v4(),
        name: 'HTML',
        children: [
            {
                id: uuid.v4(),
                name: 'HTML',
                data: [
                    {
                        title: 'MDN - HTML',
                        link: 'https://developer.mozilla.org/zh-TW/docs/Web/HTML',
                        tags: ['HTML'],
                    },
                    {
                        title: 'W3C School - HTML',
                        link: 'https://www.w3schools.com/html/',
                        tags: ['HTML'],
                    }
                ],
                children: [],
            },
        ],
    },
]

export { htmlData }