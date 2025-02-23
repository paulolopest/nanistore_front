import React from 'react'
import { motion } from 'framer-motion'

const ToggleButton = ({ state, setState, id, firstIcon, secondIcon }) => {
    return (
        <div
            onClick={() => setState((prevValue) => (prevValue === 'end' ? 'start' : 'end'))}
            className={`flex h-6 w-12 cursor-pointer items-center rounded-full bg-neutral-100 px-0.5 shadow-[inset_0px_0px_3px_0px_#d1d1d1] ${state === 'start' ? 'justify-start' : 'justify-end'} transition duration-100 ease-in-out`}
        >
            <motion.div
                className="relative flex size-6 flex-row items-center justify-center rounded-full text-neutral-600"
                layoutId={id}
            >
                {state === 'start' ? firstIcon : secondIcon}
            </motion.div>
        </div>
    )
}

export default ToggleButton
