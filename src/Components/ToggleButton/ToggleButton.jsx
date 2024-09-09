import React from 'react'
import { motion } from 'framer-motion'

const ToggleButton = ({ state, setState, id, firstIcon, secondIcon }) => {
    return (
        <div
            onClick={() => setState((prevValue) => (prevValue === 'end' ? 'start' : 'end'))}
            className={`flex h-7 w-16 cursor-pointer rounded-full items-center bg-gray-100 ${state === 'start' ? 'justify-start' : 'justify-end'} transition duration-100 ease-in-out`}
        >
            <motion.div
                className="flex justify-center items-center relative h-6 w-6 flex-row rounded-full text-black"
                layoutId={id}
            >
                {state === 'start' ? firstIcon : secondIcon}{' '}
            </motion.div>
        </div>
    )
}

export default ToggleButton
