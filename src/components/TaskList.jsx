import React, { useContext } from 'react'
import Card from './Card'
import TodoContext from '../context/todoContext'
function TaskList() {
    const [taskList] = useContext(TodoContext)
    return (
        <div className={`w-5/6 h-24 grid 2xl:grid-cols-2 lg:grid-cols-1 grid-cols-3 gap-y-10 lg:w-full`}>
            {taskList.map(item => {
                return <Card {...item} key={item.id} />
            })}
        </div>
    )
}

export default TaskList

