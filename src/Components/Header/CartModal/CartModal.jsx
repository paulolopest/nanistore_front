import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import ItemCartModal from './ItemCartModal'
import { GlobalContext } from '../../../Context/GlobalContext'

const CartModal = () => {
    const { setCartDropDown } = useContext(GlobalContext)

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -right-2 top-9 z-10 flex w-72 flex-col justify-between rounded-xl bg-white font-light shadow-hover max-lg:-right-16"
        >
            <ul className="flex max-h-[400px] flex-col overflow-scroll">
                <ItemCartModal />
                <ItemCartModal />
                <ItemCartModal />
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
