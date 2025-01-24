import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'

const Sorter = ({ title, list }) => {
    const [minimize, setMinimize] = useState(true)

    const listMap = list.map((item, index) => (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            key={index}
            className="flex items-center gap-2"
        >
            <input type="checkbox" id={item} className="cursor-pointer" />
            <label className="select-none text-neutral-500" htmlFor={item}>
                {item}
            </label>
        </motion.div>
    ))

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex w-full flex-col gap-4 rounded-md bg-white p-4 shadow-default"
            >
                <div
                    onClick={() => setMinimize(!minimize)}
                    className="flex w-full cursor-pointer items-center justify-between"
                >
                    <h3 className="text-lg font-semibold text-neutral-700">{title}</h3>
                    <Icon.CaretDown weight="bold" />
                </div>

                <AnimatePresence>{minimize && <>{listMap}</>}</AnimatePresence>
            </motion.div>
        </AnimatePresence>
    )
}

export default Sorter
