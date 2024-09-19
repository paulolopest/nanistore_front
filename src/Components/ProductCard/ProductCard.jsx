import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProductCard = ({ item }) => {
    const [srcIndex, setSrcIndex] = useState(0)

    return (
        <motion.div className="flex h-[30rem] w-72 shrink-0 cursor-pointer select-none flex-col justify-center gap-3 overflow-hidden rounded-lg bg-white uppercase shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition  duration-100 ease-in-out hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <div className="flex h-80 w-full items-center justify-center ">
                <motion.img
                    className="select-none  rounded-md object-cover"
                    draggable="false"
                    src={item.src[srcIndex]}
                    alt={`Foto do item ${item.name}`}
                    whileHover={{ scale: 1.09 }}
                />
            </div>
            <div className="flex flex-col items-center gap-4 leading-none">
                <div className="flex max-w-52 flex-col gap-1 truncate text-center font-semibold">
                    <p className="text-lg leading-none">{item.name}</p>
                    <p className="text-sm leading-none text-neutral-400">{item.type}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs text-neutral-400">
                        De: <span className="line-through">R$ {item.price - 0.01 + item.price / 10}</span>
                    </p>
                    <p className="text-xl font-bold">Por: R$ {item.price - 0.01}</p>
                    <p className="text-xs text-zinc-500">6x de R$ {(item.price / 6).toFixed(2)} sem juros</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard
