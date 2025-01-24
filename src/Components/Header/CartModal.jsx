import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import * as Icon from '@phosphor-icons/react'
import { items } from '../../Utils/Extra'

const CartModal = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -right-2 top-9 z-10 flex min-h-64 w-72 flex-col justify-between rounded-xl bg-white pt-4 font-light shadow-hover"
        >
            <ul className="flex flex-col">
                <li className="flex justify-between px-2 py-3 hover:bg-neutral-100">
                    <div className="flex gap-2">
                        <img src={items[0].src[0]} alt="img" className="size-12" />
                        <div className="flex flex-col justify-between py-1">
                            <p className="font-bold uppercase tracking-wide">{items[0].name}</p>
                            <div className="flex gap-2 text-xs font-light text-neutral-500">
                                <p>1 x </p>
                                <p>R$ {items[0].price},00</p>
                            </div>
                        </div>
                    </div>

                    <button className="flex-center size-5 rounded-full p-1 hover:bg-red-500 hover:text-white">
                        <Icon.X />
                    </button>
                </li>
                <li className="flex justify-between px-2 py-3 hover:bg-neutral-100">
                    <div className="flex gap-2">
                        <img src={items[2].src[0]} alt="img" className="size-12" />
                        <div className="flex flex-col justify-between py-1">
                            <p className="font-bold uppercase tracking-wide">{items[2].name}</p>
                            <div className="flex gap-2 text-xs font-light text-neutral-500">
                                <p>2 x </p>
                                <p>R$ {items[0].price},00</p>
                            </div>
                        </div>
                    </div>

                    <button className="flex-center size-5 rounded-full p-1 hover:bg-red-500 hover:text-white">
                        <Icon.X />
                    </button>
                </li>
                <li className="flex justify-between px-2 py-3 hover:bg-neutral-100">
                    <div className="flex gap-2">
                        <img src={items[3].src[0]} alt="img" className="size-12" />
                        <div className="flex flex-col justify-between py-1">
                            <p className="font-bold uppercase tracking-wide">{items[3].name}</p>
                            <div className="flex gap-2 text-xs font-light text-neutral-500">
                                <p>7 x </p>
                                <p>R$ {items[0].price},00</p>
                            </div>
                        </div>
                    </div>

                    <button className="flex-center size-5 rounded-full p-1 hover:bg-red-500 hover:text-white">
                        <Icon.X />
                    </button>
                </li>
            </ul>

            <div className="">
                <div className="flex items-center justify-between border-t-1 border-solid border-t-neutral-200 px-4 py-1 text-sm text-neutral-600">
                    <p className="text-base ">Total:</p>
                    <p className="font-bold">R$ 149,99</p>
                </div>

                <div className="flex h-10 items-center justify-end px-4 text-sm">
                    <button className="rounded-md bg-neutral-800 px-3 py-1 text-neutral-200">
                        Ir para o carrinho
                    </button>
                </div>
            </div>

            <div />
        </motion.div>
    )
}

export default CartModal
