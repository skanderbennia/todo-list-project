import React, { useState, useContext } from 'react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from "@fortawesome/free-solid-svg-icons"
import Modal from './Modal'
import { useForm } from "react-hook-form"
import TodoContext from '../context/todoContext'



function AddButton() {
    const [taskList, setTaskList] = useContext(TodoContext)
    const {
        register, reset, watch, formState: { errors }
    } = useForm()


    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Modal
                isOpen={openModal}
                onOk={() => {

                    setOpenModal(false)
                    const todoObject = {
                        id: taskList.length + 1,
                        title: watch("title"),
                        description: watch("description"),
                        tags: watch("tags") || [],
                    }
                    setTaskList([...taskList, todoObject])
                    reset()

                }}
                onClose={() => { setOpenModal(false) }}
            >
                <form>
                    <fieldset className='flex flex-col gap-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="title" className='text-xl' >Title</label>
                            <input type='text' id='title' name='title' {...register("title", { required: true })} className=' w-full rounded-md bg-gray-100 mt-4 px-2 py-2 outline-none' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="description" className='text-xl'>Description</label>
                            <textarea type='text' id='description' {...register("description", { required: true })} name="description" className='rounded-md w-full  bg-gray-100 mt-4 px-2 py-2 outline-none ' />
                        </div>
                        <div>
                            <span className='text-xl'>Tags</span>
                            <div className='flex flex-row gap-x-10 mt-6'>
                                <div className='flex flex-row items-center gap-x-2'>
                                    <input {...register("tags")} type="checkbox" name='tags' className='appearance-none block rounded-full h-10 w-10  bg-red-300  checked:border-gray-600 checked:border-2' value={"Study"} /> Study
                                </div>
                                <div className='flex flex-row items-center gap-x-2'>
                                    <input {...register("tags")} type="checkbox" name='tags' className='appearance-none block rounded-full h-10 w-10  bg-orange-300 checked:border-gray-600 checked:border-2' value={"Work"} /> Work
                                </div>
                                <div className='flex flex-row items-center gap-x-2'>
                                    <input {...register("tags")} type="checkbox" name='tags' className='appearance-none block rounded-full h-10 w-10  bg-amber-300  checked:border-gray-600 checked:border-2' value={"Vacation"} /> Vacation
                                </div>
                                <div className='flex flex-row items-center gap-x-2'>
                                    <input {...register("tags")} type="checkbox" name='tags' className='appearance-none block rounded-full h-10 w-10  bg-slate-300  checked:border-gray-600 checked:border-2' value={"Hobbies"} /> Hobbies
                                </div>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </Modal>
            <motion.button
                whileHover={{ rotateZ: 20 }}
                className='text-3xl px-2 cursor-pointer  text-gray-500'
                onClick={() => { setOpenModal(true) }}
            >
                <FontAwesomeIcon icon={faAdd} size='sm' />
            </motion.button>
        </>
    )
}

export default AddButton