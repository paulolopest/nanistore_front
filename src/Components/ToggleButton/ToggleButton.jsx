import React from 'react'
import { motion } from 'framer-motion'

const ToggleButton = ({ state, setState, id, firstIcon, secondIcon }) => {
    return (
        <div
            onClick={() => setState((prevValue) => (prevValue === 'end' ? 'start' : 'end'))}
            className={`flex h-7 w-16 cursor-pointer items-center rounded-full bg-white ${state === 'start' ? 'justify-start' : 'justify-end'} transition duration-100 ease-in-out`}
        >
            <motion.div
                className="relative flex size-6 flex-row items-center justify-center rounded-full text-black"
                layoutId={id}
            >
                {state === 'start' ? firstIcon : secondIcon}
            </motion.div>
        </div>
    )
}

export default ToggleButton
