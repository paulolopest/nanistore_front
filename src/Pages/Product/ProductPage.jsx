import { useParams } from 'react-router-dom'
import * as Icon from '@phosphor-icons/react'
import { motion, useAnimate } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import MeasuresTable from './components/MeasuresTable'
import Carousel from '../../Components/Carousel/Carousel'
import { items, productDetails, sizes } from './../../Utils/Extra'

const ProductPage = () => {
    const { productId } = useParams()
    const [scope, animate] = useAnimate()
    const [quantity, setQuantity] = useState(1)
    const [showedImage, setShowedImage] = useState(0)
    const [size, setSize] = useState({ activeSize: '', sizeId: 'p', sizeTable: true })

    const item = items.filter((item) => item.id === Number(productId))

    const srcMap = item[0].src.map((item, index) => (
        <div
            onClick={() => setShowedImage(index)}
            key={index}
            className={`transitionIn flex h-36 w-32 cursor-pointer justify-between rounded-lg border border-solid border-neutral-100 bg-neutral-100 p-2 ${showedImage === index && 'border-neutral-300'}`}
        >
            <motion.img
                id="miniProductImg"
                initial={{ opacity: 0 }}
                src={item}
                alt={`Imagem ${index} do produto`}
                className={`size-full rounded-xl object-contain`}
            />
        </div>
    ))

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
                className={`relative z-10 flex cursor-pointer select-none rounded-md border border-solid p-3 transition duration-200 ease-linear hover:border-neutral-800 ${tab.id === size.sizeId ? 'border-neutral-800 bg-neutral-800 font-bold text-neutral-100' : 'border-neutral-200 text-neutral-400'}`}
            >
                {tab.label}
            </p>
        </div>
    ))

    const detailsMap = productDetails.map((item, index) => (
        <div key={index} className="flex w-1/2  font-light text-body">
            <p className="flex w-1/4 items-center justify-start border-x border-b border-solid border-neutral-200 bg-neutral-100 px-2 text-subtitle">
                {item.title}
            </p>
            <p className="w-3/4 border-b border-solid border-neutral-200 p-4">{item.description}</p>
        </div>
    ))

    const handleAnimate = async () => {
        animate('#leftBox', { opacity: 1, y: 0 }, { duration: 0.2, ease: 'easeInOut' })
        animate('#rightBox', { opacity: 1, y: 0 }, { duration: 0.2, ease: 'easeInOut' })

        animate('#miniProductImg', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })

        await animate('#productName', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
        animate('#measureTable', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
        await animate('#productPrice', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
        await animate('#buyButton', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
        animate('#cartButton', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
    }

    useEffect(() => {
        handleAnimate()
    }, [])

    return (
        <Wrapper>
            <div className="flex w-full flex-col gap-12 py-36">
                <motion.div ref={scope} className="flex w-full justify-between">
                    <motion.div id="leftBox" initial={{ opacity: 0, y: 20 }} className="flex flex-col gap-10">
                        <motion.div className="flex h-[48rem] w-[60.5rem] items-center justify-between gap-10 rounded-xl bg-white p-8 shadow-md max-lg:h-[40rem] max-lg:w-full">
                            <div className="flex h-full flex-col gap-y-10">{srcMap}</div>

                            <div className="flex size-full items-center justify-center rounded-xl p-2">
                                <motion.img
                                    id="activeProductImg"
                                    initial={{ y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    key={showedImage}
                                    alt="Imagem do Produto"
                                    src={item[0].src[showedImage]}
                                    className="size-full cursor-zoom-in object-contain"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex w-[60.5rem] flex-col gap-6 rounded-xl bg-white p-8 shadow-md"
                        >
                            <h1 className="text-2xl font-bold uppercase leading-none">Descrição</h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="font-light leading-tight text-body"
                            >
                                A camiseta {item[0].type} combina estilo e funcionalidade de um jeito leve e
                                prático. Feita 100% algodão, essa camiseta oferece a proteção solar que você
                                precisa, com fator de proteção FPS50+ (aplicado diretamente na peça). Possui
                                gola redonda e mangas longas, que protegem os seus braços e te deixam mais à
                                vontade. É ideal para os dias ensolarados em que você quer se proteger e
                                evitar a exposição aos raios solares. É uma ótima opção para quem tem pele
                                sensível e não quer se expor ao sol.{' '}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="flex w-full flex-wrap justify-between border-r border-t border-solid border-neutral-200"
                            >
                                {detailsMap}
                            </motion.div>

                            <div />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex w-full justify-between rounded-xl"
                        >
                            <motion.div
                                layout
                                className="flex w-[60.5rem] flex-col rounded-xl bg-white p-8 shadow-md"
                            >
                                <motion.div
                                    layout
                                    className="flex w-full cursor-pointer justify-between"
                                    onClick={() =>
                                        setSize((prev) => ({
                                            activeSize: prev.activeSize,
                                            sizeId: prev.sizeId,
                                            sizeTable: !size.sizeTable,
                                        }))
                                    }
                                >
                                    <h1 className="text-2xl font-bold uppercase leading-none">
                                        Tabela de medidas
                                    </h1>
                                    <Icon.CaretUp
                                        className={`transitionIn cursor-pointer text-3xl ${size.sizeTable && 'rotate-180'}`}
                                    />
                                </motion.div>

                                <MeasuresTable state={size.sizeTable} />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        id="rightBox"
                        initial={{ opacity: 0, y: 20 }}
                        className="sticky top-36 flex h-[48rem] w-[32rem] flex-col justify-between rounded-xl bg-white p-8 shadow-md"
                    >
                        <div className="flex flex-col gap-6">
                            <span className="w-fit border-b border-solid border-b-neutral-200 pb-1 pr-3 text-sm font-semibold uppercase leading-none text-neutral-300">
                                Novo | 120389 vendidos
                            </span>

                            <motion.div
                                id="productName"
                                initial={{ opacity: 0, y: 20 }}
                                className="flex flex-col font-extrabold uppercase"
                            >
                                <p className="relative text-5xl text-neutral-700">{item[0].name} </p>

                                <p className="text-2xl font-bold italic text-neutral-500">{item[0].type}</p>
                            </motion.div>

                            <motion.div
                                id="measureTable"
                                initial={{ opacity: 0, y: 20 }}
                                className="flex flex-col gap-2"
                            >
                                <div className="flex cursor-pointer items-center gap-1 text-sm uppercase text-green-500 hover:underline">
                                    <p>Tabela de medidas</p>

                                    <Icon.Ruler className="text-xl" />
                                </div>

                                <div className="flex gap-5">{sizeMap}</div>
                            </motion.div>

                            <motion.div
                                id="productPrice"
                                initial={{ opacity: 0, y: 20 }}
                                className="flex flex-col justify-start gap-2 font-semibold uppercase "
                            >
                                <p className="text-xl leading-none text-neutral-800 line-through">
                                    De: R$ {(item[0].price - 0.01).toFixed(2).replace('.', ',')}
                                </p>

                                <p className="relative flex shrink-0 items-center gap-3 text-5xl font-extrabold leading-none">
                                    Por: R${' '}
                                    {(item[0].price - 0.01 - item[0].price / 10).toFixed(2).replace('.', ',')}{' '}
                                    <span className="absolute right-0 rounded-md bg-green-500 px-2 py-1 text-lg text-white">
                                        -10%
                                    </span>
                                </p>

                                <div className="text-xl leading-none text-subtitle">
                                    <p className="text-xs text-neutral-800">À vista ou</p>

                                    <p>
                                        6x de R${(item[0].price / 6).toFixed(2).replaceAll('.', ',')} sem
                                        juros
                                    </p>
                                </div>
                            </motion.div>

                            <div className="flex h-10 w-32 cursor-pointer items-center justify-between rounded-md border border-solid border-neutral-400 px-1 text-neutral-400 transition duration-200 ease-linear hover:border-neutral-700 hover:text-neutral-800 [&>div]:flex [&>div]:h-full [&>div]:w-1/5 [&>div]:cursor-pointer [&>div]:items-center [&>div]:justify-center">
                                <div onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                                    <Icon.Minus />
                                </div>

                                <p className="text-lg font-semibold">{quantity}</p>

                                <div onClick={() => setQuantity((prev) => prev + 1)}>
                                    <Icon.Plus />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 [&>button]:py-4">
                            <motion.button
                                id="buyButton"
                                initial={{ opacity: 0, y: 20 }}
                                transition={{ ease: 'easeInOut' }}
                                className="w-full rounded-lg bg-neutral-800 text-xl font-semibold uppercase text-white hover:bg-neutral-700"
                            >
                                Comprar agora
                            </motion.button>

                            <motion.button
                                id="cartButton"
                                initial={{ opacity: 0, y: 20 }}
                                className="w-full rounded-lg border border-solid border-neutral-800 text-xl font-semibold uppercase hover:border-red-600 hover:bg-red-500 hover:text-white"
                            >
                                Adicionar ao carrinho
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                <Carousel title={'Vistos por último'} />

                <Carousel title={'Talvez você goste'} />
            </div>
        </Wrapper>
    )
}

export default ProductPage
