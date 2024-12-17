import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { formatPrice } from '../../Utils/Extra'

const ProductCard = ({ item, className }) => {
    const [srcIndex, setSrcIndex] = useState(0)

    return (
        <motion.div
            whileHover={{ y: -8 }}
            onHoverEnd={() => setSrcIndex(0)}
            className={`flex h-[32rem] w-[313px] shrink-0 cursor-pointer select-none flex-col justify-center gap-2 overflow-hidden rounded-2xl bg-white p-2 shadow-default transition-shadow duration-150 ease-linear hover:shadow-hover ${className}`}
        >
            <div className="relative flex h-80 w-full items-center justify-center">
                <motion.img
                    draggable="false"
                    key={srcIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={item.src[srcIndex]}
                    alt={`Foto do item ${item.name}`}
                    className="size-[90%] select-none rounded-md object-cover"
                />

                <div className="absolute left-0 top-0 z-10 flex size-full">
                    <motion.div className="h-full w-1/2" whileHover={() => setSrcIndex(0)} />
                    <motion.div className="h-full w-1/2" whileHover={() => setSrcIndex(1)} />
                </div>
            </div>

            <div className="flex flex-col items-center gap-4">
                <div className="flex max-w-56 flex-col truncate text-center [&>p]:leading-tight [&>p]:tracking-wide">
                    <p title={item.name} className="text-2xl font-bold uppercase tracking-wide">
                        {item.name}
                    </p>

                    <p className="text-sm font-normal">{item.type}</p>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <p className="text-xs font-light text-neutral-400">
                        <span className="tracking-tight line-through">R$ {formatPrice(item.price)}</span>
                    </p>

                    <p className="text-2xl font-bold uppercase leading-none tracking-wide">
                        R$ {formatPrice(item.price - item.price / 10)}
                    </p>

                    <p className="text-xs font-light tracking-wide text-neutral-600">
                        6x de R$ {Number(item.price / 6).toFixed(2)} sem juros
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard
