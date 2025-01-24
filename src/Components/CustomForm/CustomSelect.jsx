import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'

const CustomSelect = ({ icon, name, list }) => {
    const [showList, setShowList] = useState(false)
    const [value, setValue] = useState(name)

    const listMap = list.map((item, index) => (
        <p
            className="animate flex h-10 w-full items-center pl-2 text-sm hover:bg-neutral-100"
            onClick={() => setValue(item)}
            key={index}
        >
            {item}
        </p>
    ))

    return (
        <div
            onClick={() => setShowList(!showList)}
            className="flex w-full cursor-pointer select-none items-center gap-2 text-neutral-500 "
        >
            {icon}

            <div
                className={`relative flex w-48 justify-between rounded-md border border-solid bg-white p-2 shadow-default ${
                    showList ? 'border-neutral-400' : 'border-transparent'
                }`}
            >
                <p>{value || name}</p>

                <Icon.CaretDown
                    weight="bold"
                    className={`animate duration-200 ${showList && 'rotate-180'}`}
                />

                <AnimatePresence>
                    {showList && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            exit={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: 'easeInOut' }}
                            className="absolute left-0 top-10 z-50 w-full overflow-hidden rounded-md bg-white shadow-hover"
                        >
                            {listMap}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default CustomSelect
