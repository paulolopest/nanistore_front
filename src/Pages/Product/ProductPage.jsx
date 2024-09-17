import React from 'react'
import { items } from './../../Utils/Extra'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SealCheck } from '@phosphor-icons/react'

const ProductPage = () => {
    const { productId } = useParams()

    const item = items.filter((item) => item.id === Number(productId))

    const srcMap = item[0].src.map((item, index) => (
        <div key={index} className="rounded-xl bg-neutral-50">
            <img
                className="size-full rounded-xl object-contain"
                src={item}
                alt={`Imagem ${index} do produto`}
            />
        </div>
    ))

    return (
        <div className="flex h-screen w-screen justify-between bg-neutral-100 px-36 py-10">
            <div>
                <div className="flex h-[46rem] w-[60rem] items-center justify-between rounded-xl bg-white px-10 py-5 shadow-md">
                    <div className="flex w-28 flex-col gap-y-10">{srcMap}</div>
                    <div className="h-[43rem] w-[46rem] rounded-xl bg-neutral-50">
                        <motion.img
                            className="size-full object-contain"
                            src={item[0].src[0]}
                            alt="Imagem do Produto"
                        />
                    </div>
                </div>
            </div>
            <div className="min-h-[50rem] w-[36rem] rounded-xl bg-white p-7 shadow-md">
                <div className="flex flex-col gap-3">
                    <span className="text-sm text-neutral-400">Novo | 120389 vendidos</span>

                    <span className="relative text-3xl font-bold">
                        {item[0].name} <SealCheck className="absolute bottom-1 right-28 fill-blue-500" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
