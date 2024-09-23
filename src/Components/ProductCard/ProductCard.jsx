import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProductCard = ({ item }) => {
    const [srcIndex, setSrcIndex] = useState(0)

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="flex h-[31rem] w-80 shrink-0 cursor-pointer select-none flex-col justify-center gap-4 overflow-hidden rounded-2xl bg-white shadow-default transition  duration-100  ease-linear hover:shadow-hover"
        >
            <div className="flex h-80 w-full items-center justify-center px-3">
                <motion.img
                    className="select-none rounded-md object-cover"
                    draggable="false"
                    src={item.src[srcIndex]}
                    alt={`Foto do item ${item.name}`}
                />
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="flex max-w-56 flex-col gap-1 truncate text-center [&>p]:leading-none [&>p]:tracking-wide">
                    <p title={item.name} className="text-[1.6rem] font-extrabold uppercase tracking-wide">
                        {item.name}
                    </p>
                    <p className="text-sm text-neutral-400">{item.type}</p>
                </div>

                <div className="flex flex-col items-center gap-1 [&>p]:leading-none">
                    <p className="text-sm text-neutral-400">
                        De:{' '}
                        <span className="tracking-tight line-through">
                            R$ {item.price - 0.01 + item.price / 10}
                        </span>
                    </p>

                    <p className="text-[1.6rem] font-extrabold uppercase leading-none tracking-wide">
                        Por: R$ {item.price - 0.01}
                    </p>

                    <p className="text-sm font-light tracking-wide text-neutral-600">
                        6x de R$ {(item.price / 6).toFixed(2)} sem juros
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard
