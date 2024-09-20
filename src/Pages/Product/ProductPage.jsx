import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { items, sizes } from './../../Utils/Extra'
import { useParams } from 'react-router-dom'
import { CaretDown, CaretUp, Ruler, SealCheck } from '@phosphor-icons/react'
import Wrapper from '../../Components/Wrapper/Wrapper'

const ProductPage = () => {
    const { productId } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [showedImage, setShowedImage] = useState(0)
    const [size, setSize] = useState({ activeSize: '', sizeId: '' })

    console.log('tenis')

    const item = items.filter((item) => item.id === Number(productId))

    const srcMap = item[0].src.map((item, index) => (
        <div
            onClick={() => setShowedImage(index)}
            key={index}
            className="flex h-36 w-32 cursor-pointer justify-between rounded-lg"
        >
            <motion.img
                className={`size-full rounded-xl border bg-neutral-50 object-contain ${showedImage === index && 'border-solid border-neutral-400'}`}
                src={item}
                alt={`Imagem ${index} do produto`}
            />
        </div>
    ))

    const sizeMap = sizes.map((tab) => (
        <div className="relative" key={tab.id}>
            {tab.id === size.sizeId && (
                <motion.div
                    transition={{ type: 'spring', duration: 0.3 }}
                    layoutId="sizeActiveTab"
                    className="absolute top-0 size-full rounded-md bg-neutral-800"
                />
            )}
            <p
                onClick={() => setSize({ activeSize: tab.label, sizeId: tab.id })}
                className={`relative z-10 flex cursor-pointer rounded-md border border-solid p-3 transition duration-200 ease-linear hover:border-neutral-800 ${tab.id === size.sizeId ? 'border-neutral-800 font-bold text-white' : 'border-neutral-200 text-black'}`}
            >
                {tab.label}
            </p>
        </div>
    ))

    const modifyQuantity = (modify) => {
        if (modify === 'sum') {
            setQuantity(quantity + 1)
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            } else {
                return null
            }
        }
    }

    return (
        <Wrapper>
            <div className="flex justify-between gap-10 bg-neutral-100 py-40">
                <div className="flex h-[46rem] w-[60rem] items-center justify-between rounded-xl bg-white px-8 py-5 shadow-default">
                    <div className="flex h-full w-28 flex-col gap-y-10">{srcMap}</div>

                    <div className="h-[43rem] w-[46rem] rounded-xl bg-neutral-50">
                        <motion.img
                            key={showedImage}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="size-full cursor-zoom-in object-contain  "
                            src={item[0].src[showedImage]}
                            alt="Imagem do Produto"
                        />
                    </div>
                </div>

                <div className="flex h-[46rem] w-[36rem] flex-col justify-between rounded-xl bg-white p-7 shadow-default">
                    <div className="flex flex-col gap-5">
                        <span className="w-fit border-b border-solid border-b-neutral-200 pb-1 pr-3 text-sm font-semibold uppercase text-neutral-400">
                            Novo | 120389 vendidos
                        </span>

                        <div className=" text-3xl font-extrabold uppercase">
                            <p className="relative">
                                {item[0].name}{' '}
                                <SealCheck className="absolute bottom-1 right-44 fill-blue-500" />
                            </p>
                            <p className=" text-2xl font-bold italic text-neutral-600">{item[0].type}</p>
                        </div>

                        <div className="flex cursor-pointer items-center gap-1 text-sm uppercase text-green-400 hover:underline">
                            <p>Tabela de medidas</p>
                            <Ruler className="text-xl" />
                        </div>

                        <div className="flex gap-5">{sizeMap}</div>

                        <div className="flex flex-col justify-start gap-2 text-2xl font-semibold uppercase">
                            <p className="text-lg text-neutral-400 line-through">
                                De: R$ {(item[0].price - 0.01).toFixed(2).replace('.', ',')}
                            </p>
                            <p className="flex items-center gap-3 text-5xl font-extrabold">
                                Por: R${' '}
                                {(item[0].price - 0.01 - item[0].price / 10).toFixed(2).replace('.', ',')}{' '}
                                <span className="rounded-md bg-green-500 px-2 py-1 text-lg text-white">
                                    -10%
                                </span>
                            </p>
                            <div className="text-lg text-neutral-500">
                                <p className="text-xs">À vista ou</p>
                                <p>6x de R${(item[0].price / 6).toFixed(2).replaceAll('.', ',')} sem juros</p>
                            </div>
                        </div>

                        <div className="flex h-10 w-32 items-center justify-between rounded-md border border-solid border-neutral-200 px-1 transition duration-200 ease-linear hover:border-neutral-700 [&>div]:flex [&>div]:h-full [&>div]:w-1/5 [&>div]:cursor-pointer [&>div]:items-center [&>div]:justify-center">
                            <div onClick={() => modifyQuantity('decrease')}>
                                <CaretDown />
                            </div>
                            <p className="text-lg font-semibold">{quantity}</p>
                            <div onClick={() => modifyQuantity('sum')}>
                                <CaretUp />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 [&>button]:py-4 [&>button]:transition [&>button]:duration-200 [&>button]:ease-in-out ">
                        <button className="w-full rounded-lg bg-neutral-800 text-xl font-semibold uppercase text-white hover:bg-neutral-700">
                            Comprar agora
                        </button>
                        <button className="w-full rounded-lg border border-solid border-neutral-800 text-xl font-semibold uppercase hover:border-red-500 hover:bg-red-500 hover:text-white">
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ProductPage
