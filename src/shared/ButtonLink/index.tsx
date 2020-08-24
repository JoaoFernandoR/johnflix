import React from 'react'
// CSS
import './ButtonLink.scss'

interface Props {
    href: string,
    className: string,
    children: string
}

const ButtonLink:React.FC<Props> = (props) => {
    return (
    <a href={props.href} className={props.className}>
        {props.children}
    </a>
    )
}

export default ButtonLink