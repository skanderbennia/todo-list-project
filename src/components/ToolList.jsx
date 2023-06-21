import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import TodoContext from '../context/todoContext'
function ToolList({ taskId }) {
    const [open, setOpen] = useState(false)
    const [taskList, setTaskList] = useContext(TodoContext)



    return (
        <>
            <FontAwesomeIcon color='gray' icon={faEllipsis} size="lg" className='p-1' onClick={() => {
                setOpen(!open)
            }} />
            {open && <motion.ul
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`list-none absolute top-12 right-8 bg-white flex flex-col justify-center w-48 rounded-xl`}
            >
                <li className='py-3 px-4 text-sm text-gray-500'>Edit</li>
                <hr />
                <li className=' py-3 px-4 text-sm text-gray-500' onClick={() => setTaskList(taskList.filter(task => task.id != taskId))}>Delete</li>
            </motion.ul>}
        </>

    )
}

export default ToolList


