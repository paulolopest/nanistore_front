import { motion } from 'framer-motion'
import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { items } from '../../../Utils/Extra'

const OrderCtr = () => {
    const [showOrder, setShowOrder] = useState(false)

    return (
        <motion.div layout className="overflow-hidden rounded-lg bg-neutral-100 text-neutral-600">
            <motion.div
                layout
                onClick={() => setShowOrder(!showOrder)}
                className="flex h-fit w-full cursor-pointer justify-between p-4 max-844:flex-col"
            >
                <div className="flex h-fit gap-12 max-540:flex-col max-540:gap-4">
                    <div>
                        <h1 className="">Pedido realizado</h1>
                        <p className="text-sm text-neutral-400">1 de fevereiro de 2025</p>
                    </div>
                    <div>
                        <h1 className="">Total</h1>
                        <p className="text-sm text-neutral-400">R$ 259,21</p>
                    </div>
                    <div>
                        <h1 className="">Enviar para</h1>
                        <p className="text-sm text-blue-400 underline">Casa</p>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-between gap-4 max-844:flex-col-reverse">
                    <h1 className="text-sm ">PEDIDO: 702-9710419-8019454</h1>

                    <div className="flex-center size-6">
                        <Icon.CaretDown
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
                        className="w-full border border-x-0 border-b-0 border-solid border-neutral-200 p-4 text-neutral-400"
                    >
                        <div className="flex w-full items-center justify-between">
                            <div className="flex h-20 items-center gap-4">
                                <img src={item.src[0]} alt="" className="size-14" />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-neutral-600">{item.name}</p>
                                    <p className="text-sm">{item.type}</p>
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
