import { useParams } from 'react-router-dom'
import * as Icon from '@phosphor-icons/react'
import { motion, useAnimate } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import MeasuresTable from './components/MeasuresTable'
import Carousel from '../../Components/Carousel/Carousel'
import { items, productDetails, sizes } from './../../Utils/Extra'
import ProductInfo from './components/ProductInfo'
import useMediaQuery from './../../Hooks/useMediaQuery'
import { GlobalContext } from '../../Context/GlobalContext'

const ProductPage = () => {
    const { productId } = useParams()
    const [scope, animate] = useAnimate()
    const [quantity, setQuantity] = useState(1)
    const [showedImage, setShowedImage] = useState(0)
    const [size, setSize] = useState({ activeSize: '', sizeId: 'p', sizeTable: true })

    const { xlScreen } = useContext(GlobalContext)

    const item = items.filter((item) => item.id === Number(productId))

    const srcMap = item[0].src.map((item, index) => (
        <div
            onClick={() => setShowedImage(index)}
            key={index}
            className={`transitionIn flex h-36 w-32 cursor-pointer justify-between rounded-lg border border-solid border-neutral-100 bg-neutral-100 p-2 max-1366:h-28 max-1366:w-24 ${showedImage === index && 'border-neutral-300'}`}
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
            <div className="flex w-full flex-col gap-12 py-36 max-1440:py-[8.5rem]">
                <motion.div ref={scope} className="flex w-full justify-between gap-8">
                    <motion.div
                        id="leftBox"
                        initial={{ opacity: 0, y: 20 }}
                        className="flex w-2/3 flex-col gap-10"
                    >
                        <motion.div className="flexCol h-[48rem] w-full rounded-xl bg-white p-8 shadow-md max-[1600px]:h-[45rem] max-2xl:h-[43rem] max-1366:h-[38rem] max-xl:h-fit max-xl:w-full">
                            <div className="flex size-full items-center justify-between gap-10">
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
                            </div>

                            {xlScreen && (
                                <ProductInfo
                                    item={item}
                                    size={size}
                                    setSize={setSize}
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                />
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex w-full flex-col gap-6 rounded-xl bg-white p-8 shadow-md"
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
                                className="flex w-full flex-col rounded-xl bg-white p-8 shadow-md"
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

                    {!xlScreen && (
                        <ProductInfo
                            item={item}
                            size={size}
                            setSize={setSize}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    )}
                </motion.div>

                <Carousel title={'Vistos por último'} />

                <Carousel title={'Talvez você goste'} />
            </div>
        </Wrapper>
    )
}

export default ProductPage
