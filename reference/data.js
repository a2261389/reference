
import { jsData } from './FrontEnd/JavaScript/index.js'
import { phpData } from './BackEnd/PHP/index.js'

const frontEnd = [].concat(jsData)
const backEnd = [].concat(phpData)

const data = [
    {
        id: uuid.v4(),
        name: '前端',
        tags: ['FrontEnd'],
        children: frontEnd
    },
    {
        id: uuid.v4(),
        name: '後端',
        tags: ['BackEnd'],
        children: backEnd
    },
]

export { data }