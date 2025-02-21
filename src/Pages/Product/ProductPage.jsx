import { useParams } from 'react-router-dom'
import * as Icon from '@phosphor-icons/react'
import { motion, useAnimate } from 'framer-motion'
import ProductInfo from './components/ProductInfo'
import Wrapper from '../../Components/Wrapper/Wrapper'
import MeasuresTable from './components/MeasuresTable'
import Carousel from '../../Components/Carousel/Carousel'
import { GlobalContext } from '../../Context/GlobalContext'
import { items, productDetails } from './../../Utils/Extra'
import React, { useContext, useEffect, useState } from 'react'

const ProductPage = () => {
    const { productId } = useParams()
    const [scope, animate] = useAnimate()
    const [quantity, setQuantity] = useState(1)
    const [showedImage, setShowedImage] = useState(0)
    const [size, setSize] = useState({ activeSize: '', sizeId: 'p', sizeTable: true })

    const { lgScreen } = useContext(GlobalContext)

    const item = items.find((item) => item.id === Number(productId))

    const srcMap = item.src.map((item, index) => (
        <div
            onClick={() => setShowedImage(index)}
            key={index}
            className={`transitionIn flex h-36 w-32 cursor-pointer justify-between rounded-lg border border-solid border-neutral-100 bg-neutral-100 p-2 max-1366:h-28 max-1366:w-24 max-1280:h-24 max-1280:w-20 ${showedImage === index && 'border-neutral-300'}`}
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
        <div key={index} className="flex w-1/2  font-light text-body max-540:text-sm max-380:w-full">
            <p className="w-[7.5rem] shrink-0 border-x border-b border-solid border-neutral-200 bg-neutral-100 p-4 text-subtitle max-540:flex max-540:w-[5.5rem] max-540:items-center max-540:p-2">
                {item.title}
            </p>
            <p className="w-full border-b border-solid border-neutral-200 p-4 max-540:flex max-540:items-center max-540:p-2 max-380:w-full">
                {item.description}
            </p>
        </div>
    ))

    const handleDrag = (event, info) => {
        if (info.offset.x > 0) {
            if (showedImage === 0) {
                setShowedImage(item.src.length - 1)
            } else {
                setShowedImage(showedImage - 1)
            }
        } else if (info.offset.x < 0) {
            if (showedImage === item.src.length - 1) {
                setShowedImage(0)
            } else {
                setShowedImage(showedImage + 1)
            }
        } else {
            return null
        }
    }

    const DotQuantity = () => {
        return (
            <div className=" hidden gap-2 max-460:flex">
                {Array.from({ length: item.src.length }).map((_, index) => (
                    <div
                        key={index}
                        className={`size-2 rounded-full transition-all duration-300 ${
                            index === showedImage ? 'scale-125 bg-neutral-600' : 'bg-neutral-200'
                        }`}
                    />
                ))}
            </div>
        )
    }

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
        setTimeout(() => {
            handleAnimate()
        }, 200)
    }, [])

    return (
        <Wrapper className={'max-640:px-0'}>
            <div className="flex w-full flex-col gap-12 py-36 max-1440:py-[8.5rem] max-844:py-40 max-680:py-20 max-640:py-14">
                <motion.div ref={scope} className="flex w-full justify-between gap-8">
                    <motion.div
                        id="leftBox"
                        initial={{ opacity: 0, y: 20 }}
                        className="flex w-2/3 flex-col gap-10 max-1280:w-full"
                    >
                        <motion.div className="flexCol h-[48rem] w-full gap-16 rounded-xl bg-white p-8 shadow-md max-[1600px]:h-[45rem] max-2xl:h-[43rem] max-1366:h-[38rem] max-1280:h-[35rem] max-1024:h-fit max-844:shadow-sm max-640:p-5 max-460:gap-8 max-460:rounded-none">
                            <div className="flex size-full items-center justify-between gap-10 max-1280:justify-normal max-1024:h-fit max-1024:items-start max-640:flex-col-reverse max-460:items-center max-460:gap-6">
                                <div className="flex h-full flex-col gap-y-10 max-1024:h-fit max-640:w-full max-640:flex-row max-640:justify-between max-460:hidden">
                                    {srcMap}
                                </div>

                                <DotQuantity />

                                <motion.div className="flex size-full select-none items-center justify-center rounded-xl p-2 max-1024:h-[31.5rem] max-640:h-fit max-640:p-0">
                                    <motion.img
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        onDrag={handleDrag}
                                        dragElastic={0.01}
                                        id="activeProductImg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        key={showedImage}
                                        alt="Imagem do Produto"
                                        src={item.src[showedImage]}
                                        className="size-full select-none object-contain max-460:h-[21rem]"
                                    />
                                </motion.div>
                            </div>

                            {lgScreen && (
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
                            className="flex w-full flex-col gap-6 rounded-xl bg-white p-8 shadow-md max-844:shadow-sm max-640:rounded-none max-640:p-5 max-460:gap-4 max-380:gap-3"
                        >
                            <h1 className="text-2xl font-bold uppercase leading-none max-380:text-xl">
                                Descrição
                            </h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                className="font-light leading-tight text-body max-460:text-sm"
                            >
                                A camiseta {item.type} combina estilo e funcionalidade de um jeito leve e
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
                                className="flex w-full flex-wrap justify-between border-r border-t border-solid border-neutral-200 max-380:flex-col"
                            >
                                {detailsMap}
                            </motion.div>

                            <div />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex w-full justify-between rounded-xl max-640:rounded-none"
                        >
                            <motion.div
                                layout
                                className="flex w-full flex-col rounded-xl bg-white p-8 shadow-md max-844:shadow-sm max-640:rounded-none max-640:p-5 max-460:gap-4 max-380:gap-3"
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
                                    <h1 className="text-2xl font-bold uppercase leading-none max-380:text-xl">
                                        Tabela de medidas
                                    </h1>
                                    <Icon.CaretUp
                                        className={`transitionIn cursor-pointer text-3xl ${size.sizeTable && 'rotate-180'} max-640:text-xl`}
                                    />
                                </motion.div>

                                <MeasuresTable state={size.sizeTable} />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {!lgScreen && (
                        <ProductInfo
                            item={item}
                            size={size}
                            setSize={setSize}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    )}
                </motion.div>

                <div className="flexCol gap-12 max-640:px-5">
                    <Carousel title={'Vistos por último'} />

                    <Carousel title={'Talvez você goste'} />
                </div>
            </div>
        </Wrapper>
    )
}

export default ProductPage
