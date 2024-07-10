import React from 'react'
import {TaskType} from '../App';

type Props = {
    tasks: TaskType[]
    children?: React.ReactNode
}

export const Sneakers = ({tasks, children, ...restProps}: Props) => {
    return (
        <div>
            <ul>
                {tasks.map(m => {
                    return <li key={m.id}>
                        <span>{m.id} </span>
                        <span>{m.title} </span>
                        <input type="checkbox" checked={m.isDone}/>
                    </li>
                })}
            </ul>
            {children}
        </div>
    )
}