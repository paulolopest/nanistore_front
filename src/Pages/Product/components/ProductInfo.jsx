import React from 'react'
import { motion } from 'framer-motion'
import { sizes } from '../../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'

const ProductInfo = ({ item, size, setSize, quantity, setQuantity, controls }) => {
    const sizeMap = sizes.map((tab) => (
        <div className="relative" key={tab.id}>
            {tab.id === size.sizeId && (
                <motion.div
                    layoutId="sizeActiveTab"
                    transition={{ type: 'spring', duration: 0.3 }}
                    className="absolute top-0 size-full rounded-md bg-neutral-800"
                />
            )}
            <p
                onClick={() => setSize({ activeSize: tab.label, sizeId: tab.id })}
                className={`relative z-10 flex cursor-pointer select-none rounded-md border border-solid p-3 transition duration-200 ease-linear hover:border-neutral-800 max-1280:py-2 max-1024:px-3 max-360:px-2 max-360:py-1 ${tab.id === size.sizeId ? 'border-neutral-800 bg-neutral-800 font-bold text-neutral-100' : 'border-neutral-200 text-neutral-400'}`}
            >
                {tab.label}
            </p>
        </div>
    ))

    return (
        <motion.div
            id="rightBox"
            initial={{ opacity: 0, y: 20 }}
            className="sticky top-[8.5rem] flex h-[49rem] min-w-[29.5rem] flex-col justify-between rounded-xl bg-white p-8 text-neutral-600 shadow-md max-[1600px]:h-[45rem] max-2xl:h-[43rem] max-1440:top-32 max-1366:h-[38rem] max-1280:h-[35rem] max-1280:min-w-[25rem] max-1024:w-full max-1024:min-w-0 max-1024:rounded-none max-1024:p-0 max-1024:shadow-none max-540:h-[33rem]"
        >
            <motion.div animate={controls} className="flex flex-col gap-y-8 max-1366:gap-y-6">
                <motion.div
                    id="productName"
                    initial={{ opacity: 0, y: 20 }}
                    className="flex flex-col font-extrabold uppercase"
                >
                    <p className="relative text-5xl  max-1366:text-4xl">{item.name}</p>

                    <p className="text-xl font-semibold italic text-neutral-400">{item.type}</p>
                </motion.div>

                <motion.div id="measureTable" initial={{ opacity: 0, y: 20 }} className="flex flex-col gap-2">
                    <div className="flex cursor-pointer items-center gap-1 text-sm uppercase text-green-500 hover:underline">
                        <p>Tabela de medidas</p>

                        <Icon.Ruler className="text-xl" />
                    </div>

                    <div className="flex gap-5">{sizeMap}</div>
                </motion.div>

                <motion.div
                    id="productPrice"
                    initial={{ opacity: 0, y: 20 }}
                    className="flex w-full flex-col justify-start gap-1 uppercase max-1366:gap-0"
                >
                    <p className="text-xl text-neutral-400 line-through max-1366:text-lg">
                        De: R$ {(item.price - 0.01).toFixed(2).replace('.', ',')}
                    </p>

                    <p className="relative flex shrink-0 items-center text-5xl font-extrabold max-1366:text-4xl">
                        Por: R$ {(item.price - 0.01 - item.price / 10).toFixed(2).replace('.', ',')}{' '}
                        <span className="absolute -right-2 rounded-md bg-green-500 px-2 py-1 text-lg text-white max-1440:-top-8 max-1280:px-1 max-1280:py-0.5 max-1280:text-base">
                            -10%
                        </span>
                    </p>

                    <div className="text-xl leading-none max-1366:text-lg">
                        <p className="text-xs">À vista ou</p>

                        <p>6x de R${(item.price / 6).toFixed(2).replaceAll('.', ',')} sem juros</p>
                    </div>
                </motion.div>

                <div className="flex h-10 w-32 cursor-pointer items-center justify-between rounded-md border border-solid border-neutral-400 px-1 text-neutral-400 transition duration-200 ease-linear hover:border-neutral-700 hover:text-neutral-600 max-1366:h-8 max-1366:w-28 [&>div]:flex [&>div]:h-full [&>div]:w-1/5 [&>div]:cursor-pointer [&>div]:items-center [&>div]:justify-center">
                    <div onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                        <Icon.Minus />
                    </div>

                    <p className="text-lg font-semibold">{quantity}</p>

                    <div onClick={() => setQuantity((prev) => prev + 1)}>
                        <Icon.Plus />
                    </div>
                </div>
            </motion.div>

            <div className="flex flex-col gap-3 [&>button]:py-4 max-1366:[&>button]:py-3">
                <motion.button
                    id="buyButton"
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ ease: 'easeInOut' }}
                    className="w-full rounded-lg bg-neutral-800 text-xl font-semibold uppercase leading-none text-white hover:bg-neutral-700 max-1366:text-lg max-460:text-base"
                >
                    Comprar agora
                </motion.button>

                <motion.button
                    id="cartButton"
                    initial={{ opacity: 0, y: 20 }}
                    className="w-full rounded-lg border border-solid border-neutral-800 text-xl font-semibold uppercase leading-none hover:border-red-600 hover:bg-red-500 hover:text-white max-1366:text-lg max-460:text-base"
                >
                    Adicionar ao carrinho
                </motion.button>
            </div>
        </motion.div>
    )
}

export default ProductInfo
