import React from 'react'
import { childrenWithProps } from '../Utils/Utils'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>