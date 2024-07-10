import React from 'react'

type Props = {
    name?: string
    onClick: () => void
    children: React.ReactNode
}

export const Button: React.FC<Props> = (props) => {
    const {name, onClick, children, ...restProps} = props

    const onClickHandler = () => {
        onClick()
    }
    return (
        <button onClick={onClickHandler}>{children}</button>
    )
}