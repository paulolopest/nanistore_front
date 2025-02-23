import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const Sorter = ({ title, list }) => {
    const [minimize, setMinimize] = useState(true)

    const listMap = list.map((item, index) => (
        <motion.div key={index} className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" id={item} className="cursor-pointer" />
            <label className="cursor-pointer select-none text-sm text-neutral-400" htmlFor={item}>
                {item}
            </label>
        </motion.div>
    ))

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex w-full flex-col gap-4 overflow-hidden rounded-md bg-white p-4 shadow-default"
        >
            <motion.div
                onClick={() => setMinimize(!minimize)}
                className="flex w-full cursor-pointer items-center justify-between"
            >
                <h3 className="font-semibold text-neutral-600">{title}</h3>
                <motion.span animate={{ rotate: minimize ? 0 : 180 }} transition={{ duration: 0.2 }}>
                    <Icon.CaretDown weight="bold" />
                </motion.span>
            </motion.div>

            <AnimatePresence initial={false}>
                {minimize && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.1 }}
                        className="flexCol gap-4 overflow-hidden"
                    >
                        {listMap}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Sorter
