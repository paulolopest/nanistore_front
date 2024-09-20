import React from 'react'
import { motion } from 'framer-motion'

const ToggleButton = ({ state, setState, id, firstIcon, secondIcon }) => {
    return (
        <div
            onClick={() => setState((prevValue) => (prevValue === 'end' ? 'start' : 'end'))}
            className={` flex h-7 w-16 cursor-pointer items-center rounded-full bg-neutral-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${state === 'start' ? 'justify-start' : 'justify-end'} transition duration-100 ease-in-out`}
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
