import { motion } from 'framer-motion'
import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { items } from '../../../Utils/Extra'

const OrderCtr = () => {
    const [showOrder, setShowOrder] = useState(false)

    return (
        <motion.div layout className="overflow-hidden rounded-md bg-neutral-100">
            <motion.div
                layout
                onClick={() => setShowOrder(!showOrder)}
                className="flex h-fit w-full cursor-pointer justify-between p-4"
            >
                <div className="flex h-fit gap-12">
                    <div>
                        <h1 className="text-base text-neutral-700">Pedido realizado</h1>
                        <p className="text-sm text-neutral-500">1 de fevereiro de 2025</p>
                    </div>
                    <div>
                        <h1 className="text-base text-neutral-700">Total</h1>
                        <p className="text-sm text-neutral-500">R$ 259,21</p>
                    </div>
                    <div>
                        <h1 className="text-base text-neutral-700">Enviar para</h1>
                        <p className="text-sm text-blue-400 underline">Casa</p>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-between gap-4">
                    <h1 className="text-sm text-neutral-700">PEDIDO: 702-9710419-8019454</h1>

                    <div className="flex-center size-6">
                        <Icon.CaretUp
                            className={`transition-transform ease-in ${showOrder ? 'rotate-180' : ''}`}
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                layout
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: showOrder ? 'auto' : 0, opacity: showOrder ? 1 : 0 }}
                className="overflow-hidden"
            >
                {items.slice(2, 5).map((item, index) => (
                    <div
                        key={index}
                        className="w-full border border-x-0 border-b-0 border-solid border-neutral-200 p-4 text-neutral-500"
                    >
                        <div className="flex w-full items-center justify-between">
                            <div className="flex h-20 items-center gap-4">
                                <img src={item.src[0]} alt="" className="size-14" />
                                <div className="flex flex-col text-base">
                                    <p>{item.type}</p>
                                    <p>{item.name}</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <p>Quantidade</p>
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default OrderCtr
