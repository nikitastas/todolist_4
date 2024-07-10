import React from 'react'
import s from './Button.module.css'

type Props = {
    name?: string
    onClick: () => void
    children: React.ReactNode
    color?: string
    disabled?: boolean
}

export const Button: React.FC<Props> = (props) => {
    const {name, onClick, children, color, disabled, ...restProps} = props

    const onClickHandler = () => {
        onClick()
    }

    /*const finalClassName = s.button
        + (disabled
            ? ' ' + s.disabled
            : color === 'red'
                ? ' ' + s.red
                : color === 'secondary'
                    ? ' ' + s.secondary
                    : ' ' + s.default)
        + (className ? ' ' + className : '')*/

    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default} 
    ${disabled ? s.disabled : ''}
    `

    return (
        <button className={finalClassName} onClick={onClickHandler}>{children}</button>
    )
}