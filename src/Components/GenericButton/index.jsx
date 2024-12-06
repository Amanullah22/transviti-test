import React from 'react'
import './index.css'

const Button = (props) => {
    return <button className={"generic_btn " + props.className}>
        {props.content} <span style={{ paddingTop: '1px' }}>{props.icon ? 'Search' : ''}</span>
    </button>
}

export default Button