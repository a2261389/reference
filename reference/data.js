
// FrontEnd
import { jsData } from './FrontEnd/JavaScript/index.js'
import { cssData } from './FrontEnd/CSS/index.js'
import { htmlData } from './FrontEnd/HTML/index.js'

// BackEnd
import { phpData } from './BackEnd/PHP/index.js'
import { goData } from './BackEnd/Golang/index.js'

// DevOps
import { linuxData } from './DevOps/Linux/index.js'

const frontEnd = [].concat(jsData, htmlData, cssData)
const backEnd = [].concat(phpData, goData)
const devOps = [].concat(linuxData)

const data = [
    {
        id: uuid.v4(),
        name: '前端',
        children: frontEnd
    },
    {
        id: uuid.v4(),
        name: '後端',
        children: backEnd
    },
    {
        id: uuid.v4(),
        name: 'DevOps',
        children: devOps,
    }
]

export { data }