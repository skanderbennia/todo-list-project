import React, { useState } from 'react'
import { motion } from "framer-motion"
import ToolList from './ToolList'
import CardTags from './CardTags'

function Card({ id, title, description, tags }) {
    const [checked, setChecked] = useState(false)
    return (
        <motion.div
            className={`relative w-96 h-56  p-6 flex flex-col gap-2 rounded-lg ${!checked ? 'bg-yellow-50' : 'bg-red-300'} lg:w-full `}
            initial={(id % 3) == 1 ? { x: -1000 } : (id % 3) == 2 ? { y: 1000 } : { x: 1000 }}
            animate={{ x: 0, y: 0, transition: { delay: 2, duration: 1, type: "spring" } }}
            whileHover={{ scale: 1.1, boxShadow: "0 4px 6px rgba(0,0,0,0.1)", transition: { type: "spring" } }}
        >
            <header className='flex flex-row justify-between items-center '>
                <h2 className='text-xl'>{title}</h2>
                <ToolList taskId={id} />

            </header>
            <div>
                <p>
                    {description}
                </p>
            </div>
            <footer className='flex flex-row justify-between my-4'>
                <CardTags tags={tags} />
                <div className='flex flex-row items-center gap-2'>
                    <label htmlFor={"checkbox " + id}><input type="checkbox" className='cursor-pointer' id={"checkbox " + id} onClick={() => {
                        setChecked(!checked)
                    }} /> <span className='select-none'>Done</span> </label>
                </div>
            </footer>
        </motion.div>
    )
}

export default Card