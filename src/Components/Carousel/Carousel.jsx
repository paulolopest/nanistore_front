import React from 'react'
import { items } from '../../Utils/Extra'
import { motion } from 'framer-motion'

const Carousel = ({ title }) => {
    const itemMap = items.map((item) => (
        <motion.div
            key={item.id}
            style={{
                boxShadow:
                    '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
            }}
            whileHover={{
                boxShadow: '0 3px 10px rgb(0,0,0,0.2)',
            }}
            className="flex flex-col justify-center gap-2 select-none w-72 h-[30rem] p-1 flex-shrink-0 bg-white rounded-md uppercase transition ease-in-out duration-100 cursor-pointer"
        >
            <img
                className="w-full h-80 select-none object-cover rounded-md"
                draggable="false"
                src={item.src}
                alt={`Foto do item ${item.name}`}
            />
            <div className="flex flex-col gap-3 items-center">
                <p className="font-semibold text-lg">{item.name}</p>
                <div className="flex flex-col items-center gap-1">
                    <p className="text-xs text-zinc-500">
                        De: <span className="line-through ">R$ {item.price - 0.01 + item.price / 10}</span>
                    </p>
                    <p className="font-bold text-xl">Por: R$ {item.price - 0.01}</p>
                    <p className="text-xs text-zinc-500">6x de R$ {(item.price / 6).toFixed(2)} sem juros</p>
                </div>
            </div>
        </motion.div>
    ))

    return (
        <div className="flex flex-col w-full gap-y-6 px-28">
            <h1 className="text-3xl uppercase font-semibold">{title}</h1>
            <div className="w-full overflow-hidden p-2">
                <motion.div drag="x" dragConstraints={{ left: -2000, right: 0 }} className="flex gap-10">
                    {itemMap}
                </motion.div>
            </div>
        </div>
    )
}

export default Carousel
