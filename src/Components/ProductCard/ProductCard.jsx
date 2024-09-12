import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProductCard = ({ item }) => {
    const [srcIndex, setSrcIndex] = useState(0)

    return (
        <motion.div
            style={{
                boxShadow:
                    '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
            }}
            whileHover={{ boxShadow: '0 3px 10px rgb(0,0,0,0.2)' }}
            onHoverStart={() => setSrcIndex(1)}
            onHoverEnd={() => setSrcIndex(0)}
            className="flex overflow-hidden flex-col justify-center gap-2 select-none w-72 h-[30rem] p-1 flex-shrink-0 bg-white rounded-md uppercase transition ease-in-out duration-100 cursor-pointer"
        >
            <motion.img
                className="w-full h-80 select-none object-cover rounded-md"
                draggable="false"
                src={item.src[srcIndex]}
                alt={`Foto do item ${item.name}`}
                whileHover={{ scale: 1.09 }}
            />
            <div className="flex flex-col gap-3 items-center">
                <p className="font-medium text-lg">{item.name}</p>
                <div className="flex flex-col items-center">
                    <p className="text-xs text-neutral-400">
                        De: <span className="line-through">R$ {item.price - 0.01 + item.price / 10}</span>
                    </p>
                    <p className="font-bold text-xl">Por: R$ {item.price - 0.01}</p>
                    <p className="text-xs text-zinc-500">6x de R$ {(item.price / 6).toFixed(2)} sem juros</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard
