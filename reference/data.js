
import { jsData } from './FrontEnd/JavaScript/index.js'
import { cssData } from './FrontEnd/CSS/index.js'
import { htmlData } from './FrontEnd/HTML/index.js'
import { phpData } from './BackEnd/PHP/index.js'
import { goData } from './BackEnd/Golang/index.js'

const frontEnd = [].concat(jsData, htmlData, cssData)
const backEnd = [].concat(phpData, goData)

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