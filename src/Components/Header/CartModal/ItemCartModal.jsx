import React from 'react'
import { items } from '../../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'

const ItemCartModal = () => {
    return (
        <motion.li className="flex justify-between p-4 hover:bg-neutral-100">
            <div className="flex gap-2">
                <img src={items[2].src[0]} alt="img" className="size-16" />

                <div className="flex flex-col justify-between gap-1 py-1">
                    <p className="font-bold uppercase  ">{items[2].name}</p>

                    <div className="flex gap-2 text-xs text-neutral-400">
                        <p>R$ {items[2].price - 0.11}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-neutral-400">
                        <div className="size-5 rounded-full p-1 hover:bg-neutral-600  hover:text-neutral-50">
                            <Icon.Minus className="size-full" />
                        </div>

                        <p>1</p>

                        <div className="size-5 rounded-full p-1 hover:bg-neutral-600  hover:text-neutral-50">
                            <Icon.Plus className="size-full" />
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-center size-5 rounded-full p-1 text-neutral-400 hover:bg-red-500 hover:text-white"
                >
                    <Icon.X className="size-full " />
                </motion.button>
            </AnimatePresence>
        </motion.li>
    )
}

export default ItemCartModal
