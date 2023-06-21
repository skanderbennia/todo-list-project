import React from 'react'
import Logo from "../assets/logo.png"
import AddButton from './AddButton'
import { motion } from "framer-motion"
import { layoutDelay, layoutDuration } from '../constants/motion.js'
import Modal from './Modal'
function Navbar() {
    return (
        <motion.div className=' bg-transparentGrey fixed px-20 z-40 right-0 left-0 top-0 h-[120px] flex justify-between items-center border-2'
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: layoutDelay, duration: layoutDuration }}

        >
            <img src={Logo} className='h-20 w-25' />
            <div className='flex flex-row items-center gap-x-2'>
                <AddButton />

            </div>
        </motion.div>
    )
}

export default Navbar