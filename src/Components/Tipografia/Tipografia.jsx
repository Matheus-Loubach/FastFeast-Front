import React from 'react'
import * as T from './style'
function Tipografia(props) {
    return (
        <T.Span value={props} color={props.color} font={props.font} size={props.size} weight={props.weight}>
            {props.children}
        </T.Span>
    )
}

export default Tipografia