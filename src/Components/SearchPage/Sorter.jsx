import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const Sorter = ({ title, list, className }) => {
    const [minimize, setMinimize] = useState(true)

    const listMap = list.map((item, index) => (
        <motion.div key={index} className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" id={item} className="cursor-pointer" />
            <label className="cursor-pointer select-none py-3 text-sm text-neutral-400" htmlFor={item}>
                {item}
            </label>
        </motion.div>
    ))

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex w-full flex-col overflow-hidden rounded-md bg-white shadow-default ${className}`}
        >
            <motion.div
                onClick={() => setMinimize(!minimize)}
                className="flex w-full cursor-pointer items-center justify-between px-4 py-2"
            >
                <h3 className="text-neutral-500">{title}</h3>

                <motion.span animate={{ rotate: minimize ? 0 : 180 }} transition={{ duration: 0.2 }}>
                    <Icon.CaretDown />
                </motion.span>
            </motion.div>

            <AnimatePresence initial={false}>
                {minimize && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flexCol overflow-hidden px-4"
                    >
                        {listMap}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Sorter
