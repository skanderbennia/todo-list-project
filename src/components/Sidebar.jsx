import React from 'react'
import { motion } from "framer-motion"
import { layoutDelay, layoutDuration } from '../constants/motion'
function Sidebar() {
    return (
        <motion.div className='w-1/6 h-full lg:h-24 lg:flex lg:flex-row lg:w-full'
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ delay: layoutDelay, duration: layoutDuration }}

        >
            < ul className='list-none lg:flex lg:flex-row lg:justify-between lg:w-full'>
                <div className='flex items-center flex-row my-12 gap-x-2'>
                    <div className="h-10 w-10 rounded-full  bg-red-300"></div>
                    <li>Study</li>
                </div>
                <div className='flex items-center flex-row my-12 gap-x-2'>
                    <div className="h-10 w-10 rounded-full  bg-orange-300"></div>
                    <li>Work</li>
                </div>
                <div className='flex items-center flex-row my-12 gap-x-2'>
                    <div className="h-10 w-10 rounded-full  bg-amber-300">
                    </div><li>Vacation</li>
                </div>
                <div className='flex items-center flex-row my-12 gap-x-2'>
                    <div className="h-10 w-10 rounded-full  bg-slate-300"></div>
                    <li>Hobbies</li>
                </div>
            </ul>
            <div className='lg:hidden'>
                <input type='checkbox' className='border-r-gray-400 mr-1' />
                <span className='text-gray-400'>Hide Done Tasks</span>
            </div>
        </motion.div >
    )
}

export default Sidebar