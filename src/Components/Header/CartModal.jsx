import React, { useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as Icon from '@phosphor-icons/react'
import { items } from '../../Utils/Extra'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalContext'

const CartModal = () => {
    const [showX, setShowX] = useState(false)

    const { setCartDropDown } = useContext(GlobalContext)

    const handleX = () => {
        setTimeout(() => {
            setShowX(true)
        }, 200)

        clearTimeout(handleX)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -right-2 top-9 z-10 flex w-72 flex-col justify-between rounded-xl bg-white font-light shadow-hover"
        >
            <ul className="flex flex-col ">
                <motion.li
                    onHoverStart={handleX}
                    onHoverEnd={() => setShowX(false)}
                    className="flex justify-between p-4 hover:bg-neutral-100"
                >
                    <div className="flex gap-2">
                        <img src={items[0].src[0]} alt="img" className="size-16" />

                        <div className="flex flex-col justify-between gap-1 py-1">
                            <p className="font-bold uppercase tracking-wide">{items[0].name}</p>

                            <div className="flex gap-2 text-xs font-light text-neutral-500">
                                <p>R$ {items[0].price - 0.11}</p>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-neutral-600">
                                <Icon.Minus />
                                <p>1</p>
                                <Icon.Plus />
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showX && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex-center size-5 rounded-full p-1 text-neutral-800 hover:bg-red-500 hover:text-white"
                            >
                                <Icon.X className="size-full " />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.li>

                <motion.li
                    onHoverStart={handleX}
                    onHoverEnd={() => setShowX(false)}
                    className="flex justify-between p-4 hover:bg-neutral-100"
                >
                    <div className="flex gap-2">
                        <img src={items[2].src[0]} alt="img" className="size-16" />

                        <div className="flex flex-col justify-between gap-1 py-1">
                            <p className="font-bold uppercase tracking-wide">{items[2].name}</p>

                            <div className="flex gap-2 text-xs font-light text-neutral-500">
                                <p>R$ {items[2].price - 0.11}</p>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-neutral-600">
                                <Icon.Minus className="rounded-full hover:bg-neutral-400 hover:text-white" />
                                <p>1</p>
                                <Icon.Plus />
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showX && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex-center size-5 rounded-full p-1 text-neutral-800 hover:bg-red-500 hover:text-white"
                            >
                                <Icon.X className="size-full " />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.li>
            </ul>

            <div className="flex flex-col gap-2 border-1 border-x-0 border-b-0 border-solid border-t-neutral-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm text-neutral-600">
                    <p className=" ">Total:</p>
                    <p className="font-bold leading-none">R$ 149,99</p>
                </div>

                <div className="flex h-10 items-center justify-end text-sm">
                    <Link
                        to={'/cart'}
                        className="rounded-md bg-neutral-800 px-2 py-1 text-neutral-50 hover:bg-neutral-700"
                        onClick={() => setCartDropDown(false)}
                    >
                        Finalizar compra
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default CartModal
