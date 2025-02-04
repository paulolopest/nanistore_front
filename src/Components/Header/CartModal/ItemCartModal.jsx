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
                    <p className="font-bold uppercase tracking-wide">{items[2].name}</p>

                    <div className="flex gap-2 text-xs font-light text-neutral-500">
                        <p>R$ {items[2].price - 0.11}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-neutral-600">
                        <div className="size-5 rounded-full p-1 hover:bg-neutral-500  hover:text-neutral-100">
                            <Icon.Minus className="size-full" />
                        </div>

                        <p>1</p>

                        <div className="size-5 rounded-full p-1 hover:bg-neutral-500  hover:text-neutral-100">
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
