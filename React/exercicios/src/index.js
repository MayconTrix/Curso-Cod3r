import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const elemento = <h1>React</h1>
ReactDOM.render(
    <div>
        <Pai nome='Trix' sobrenome='Batista'>
            <Filho nome='Maycon'/>
            <Filho nome='Paulo'/>
            <Filho nome='Carla'/>
        </Pai>
    </div>
 , document.getElementById('root'))


// $('<h1>').html('React 2')