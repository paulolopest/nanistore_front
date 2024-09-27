import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Icon from '@phosphor-icons/react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import Carousel from '../../Components/Carousel/Carousel'
import { items, productDetails, sizes } from './../../Utils/Extra'
import ManBody from '../../Assets/images/men-body-measurments.png'
import WomanBody from '../../Assets/images/women-body-measurments.png'

const ProductPage = () => {
    const { productId } = useParams()

    const [quantity, setQuantity] = useState(1)
    const [bodyType, setBodyType] = useState('woman')
    const [showedImage, setShowedImage] = useState(0)
    const [size, setSize] = useState({ activeSize: '', sizeId: '', sizeTable: true })

    const item = items.filter((item) => item.id === Number(productId))

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

    const srcMap = item[0].src.map((item, index) => (
        <div
            onClick={() => setShowedImage(index)}
            key={index}
            className={`flex h-36 w-32 cursor-pointer justify-between rounded-lg border bg-neutral-100 p-2 ${showedImage === index && 'border-solid border-neutral-300'}`}
        >
            <motion.img
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
                className={`relative z-10 flex cursor-pointer rounded-md border border-solid p-3 transition duration-200 ease-linear hover:border-neutral-800 ${tab.id === size.sizeId ? 'border-neutral-800 font-bold text-white' : 'border-neutral-200 text-black'}`}
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

    return (
        <Wrapper>
            <div className="flex w-full flex-col gap-12 py-36">
                <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-10">
                        <div className="flex h-[48rem] w-[60.5rem] items-center justify-between gap-10 rounded-xl bg-white p-8 shadow-default max-lg:h-[40rem] max-lg:w-full">
                            <div className="flex h-full flex-col gap-y-10">{srcMap}</div>

                            <div className="flex size-full items-center justify-center rounded-xl p-2">
                                <motion.img
                                    key={showedImage}
                                    alt="Imagem do Produto"
                                    animate={{ opacity: 1, x: 0 }}
                                    src={item[0].src[showedImage]}
                                    initial={{ opacity: 0, x: -30 }}
                                    className="size-full cursor-zoom-in object-contain"
                                />
                            </div>
                        </div>

                        <div className="flex w-[60.5rem] flex-col gap-6 rounded-xl bg-white p-8 shadow-default">
                            <h1 className="text-2xl font-bold uppercase leading-none">Descrição</h1>

                            <p className="font-light leading-tight text-body">
                                A camiseta {item[0].type} combina estilo e funcionalidade de um jeito leve e
                                prático. Feita 100% algodão, essa camiseta oferece a proteção solar que você
                                precisa, com fator de proteção FPS50+ (aplicado diretamente na peça). Possui
                                gola redonda e mangas longas, que protegem os seus braços e te deixam mais à
                                vontade. É ideal para os dias ensolarados em que você quer se proteger e
                                evitar a exposição aos raios solares. É uma ótima opção para quem tem pele
                                sensível e não quer se expor ao sol.{' '}
                            </p>

                            <div className="flex w-full flex-wrap justify-between border-r border-t border-solid border-neutral-200">
                                {detailsMap}
                            </div>

                            <div />
                        </div>

                        <div className="flex w-full justify-between rounded-xl">
                            <motion.div className="flex w-[60.5rem] flex-col gap-5 rounded-xl bg-white p-8 shadow-default">
                                <div className="flex w-full justify-between">
                                    <h1 className="text-2xl font-bold uppercase leading-none">
                                        Tabela de medidas
                                    </h1>
                                    <Icon.CaretDown
                                        className="cursor-pointer text-3xl"
                                        onClick={() =>
                                            setSize((prev) => ({
                                                activeSize: prev.activeSize,
                                                sizeId: prev.sizeId,
                                                sizeTable: !size.sizeTable,
                                            }))
                                        }
                                    />
                                </div>

                                {size.sizeTable && (
                                    <>
                                        <div className="flex gap-10 border-y border-solid border-neutral-200 py-4 text-base font-bold uppercase text-subtitle">
                                            <p
                                                onClick={() => setBodyType('man')}
                                                className={`${bodyType === 'man' ? 'text-red-500' : 'text-subtitle'} cursor-pointer`}
                                            >
                                                Homens
                                            </p>
                                            <p
                                                onClick={() => setBodyType('woman')}
                                                className={`${bodyType === 'woman' ? 'text-red-500' : 'text-subtitle'} cursor-pointer`}
                                            >
                                                Mulheres
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center gap-16">
                                            <div className="flex flex-col gap-6">
                                                <h1 className="font-bold uppercase text-subtitle">
                                                    Tabela de medidas masculinas
                                                </h1>

                                                <div className="flex w-[40.75rem] gap-20 font-light [&>div]:flex [&>div]:flex-col  [&>div]:items-center [&>div]:gap-10">
                                                    <div className="flex flex-col uppercase">
                                                        <h1 className=" font-bold">Tamanho</h1>
                                                        <p>{sizes[0].label}</p>
                                                        <p>{sizes[1].label}</p>
                                                        <p>{sizes[2].label}</p>
                                                        <p>{sizes[3].label}</p>
                                                        <p>{sizes[4].label}</p>
                                                    </div>

                                                    <div className="flex flex-col uppercase">
                                                        <h1 className=" font-bold">Busto</h1>
                                                        <p>{sizes[0][bodyType].busto}</p>
                                                        <p>{sizes[1][bodyType].busto}</p>
                                                        <p>{sizes[2][bodyType].busto}</p>
                                                        <p>{sizes[3][bodyType].busto}</p>
                                                        <p>{sizes[4][bodyType].busto}</p>
                                                    </div>

                                                    <div className="flex flex-col uppercase">
                                                        <h1 className=" font-bold">Cintura</h1>
                                                        <p>{sizes[0][bodyType].cintura}</p>
                                                        <p>{sizes[1][bodyType].cintura}</p>
                                                        <p>{sizes[2][bodyType].cintura}</p>
                                                        <p>{sizes[3][bodyType].cintura}</p>
                                                        <p>{sizes[4][bodyType].cintura}</p>
                                                    </div>

                                                    <div className="flex flex-col uppercase">
                                                        <h1 className=" font-bold">Quadril</h1>
                                                        <p>{sizes[0][bodyType].quadril}</p>
                                                        <p>{sizes[1][bodyType].quadril}</p>
                                                        <p>{sizes[2][bodyType].quadril}</p>
                                                        <p>{sizes[3][bodyType].quadril}</p>
                                                        <p>{sizes[4][bodyType].quadril}</p>
                                                    </div>

                                                    <div className="flex flex-col uppercase">
                                                        <h1 className=" font-bold">Entrepernas</h1>
                                                        <p>{sizes[0][bodyType].entrepernas}</p>
                                                        <p>{sizes[1][bodyType].entrepernas}</p>
                                                        <p>{sizes[2][bodyType].entrepernas}</p>
                                                        <p>{sizes[3][bodyType].entrepernas}</p>
                                                        <p>{sizes[4][bodyType].entrepernas}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex w-[40.75rem] flex-col gap-2 font-normal uppercase">
                                                <h1 className="font-bold text-subtitle">Como medir?</h1>
                                                <p className="text-sm text-body">
                                                    Meça sempre em pé, com roupas leves. Utilize sempre uma
                                                    fita métrica mantendo na horizontal, contornando por
                                                    completo a área desejada, sem pressionar. Após a medição,
                                                    verifique na tabela o tamanho correspondente.
                                                </p>
                                            </div>

                                            <div className="flex gap-10">
                                                <div className="flex w-[30.50rem] flex-col justify-between text-lg font-light text-neutral-700">
                                                    <p className="leading-none text-body">
                                                        <span className="font-bold text-subtitle">
                                                            Busto:
                                                        </span>{' '}
                                                        Meça a volta total do busto (a parte mais volumosa do
                                                        tronco).
                                                    </p>
                                                    <p className="leading-none text-body">
                                                        <span className="font-bold text-subtitle">
                                                            Cintura:
                                                        </span>{' '}
                                                        Meça a volta total da cintura (a parte mais estreita
                                                        do tronco), cerca de dois dedos acima do umbigo.
                                                    </p>
                                                    <p className="leading-none text-body">
                                                        <span className="font-bold text-subtitle">
                                                            Quadril:
                                                        </span>{' '}
                                                        Meça a volta total do quadril (a parte mais larga do
                                                        tronco), pouco abaixo da cintura.
                                                    </p>

                                                    <p className="leading-none text-body">
                                                        <span className="font-bold text-subtitle">
                                                            Entrepernas:
                                                        </span>
                                                        Meça a distância total entre o início da parte da coxa
                                                        e o calcanhar.
                                                    </p>
                                                </div>

                                                <div>
                                                    <img
                                                        src={bodyType === 'man' ? ManBody : WomanBody}
                                                        alt="Exemplo de corpo"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>

                    <div className="sticky top-36 flex h-[48rem] w-[32rem] flex-col justify-between rounded-xl bg-white p-8 shadow-default">
                        <div className="flex flex-col gap-6">
                            <span className="w-fit border-b border-solid border-b-neutral-200 pb-1 pr-3 text-sm font-semibold uppercase leading-none text-neutral-400">
                                Novo | 120389 vendidos
                            </span>

                            <div className="flex flex-col font-extrabold uppercase">
                                <p className="relative text-5xl">{item[0].name} </p>

                                <p className="text-2xl font-bold italic text-subtitle">{item[0].type}</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex cursor-pointer items-center gap-1 text-sm uppercase text-green-500 hover:underline">
                                    <p>Tabela de medidas</p>

                                    <Icon.Ruler className="text-xl" />
                                </div>

                                <div className="flex gap-5">{sizeMap}</div>
                            </div>

                            <div className="flex flex-col justify-start gap-2 font-semibold uppercase ">
                                <p className="text-xl leading-none text-body line-through">
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
                            </div>

                            <div className="flex h-10 w-32 cursor-pointer items-center justify-between rounded-md border border-solid border-neutral-400 px-1 text-neutral-400 transition duration-200 ease-linear hover:border-neutral-700 hover:text-neutral-800 [&>div]:flex [&>div]:h-full [&>div]:w-1/5 [&>div]:cursor-pointer [&>div]:items-center [&>div]:justify-center">
                                <div onClick={() => modifyQuantity('decrease')}>
                                    <Icon.CaretDown />
                                </div>

                                <p className="text-lg font-semibold">{quantity}</p>

                                <div onClick={() => modifyQuantity('sum')}>
                                    <Icon.CaretUp />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 [&>button]:py-4 [&>button]:transition [&>button]:duration-200 [&>button]:ease-in-out ">
                            <button className="w-full rounded-lg bg-neutral-800 text-xl font-semibold uppercase text-white hover:bg-neutral-700">
                                Comprar agora
                            </button>

                            <button className="w-full rounded-lg border border-solid border-neutral-800 text-xl font-semibold uppercase hover:border-red-600 hover:bg-red-500 hover:text-white">
                                Adicionar ao carrinho
                            </button>
                        </div>
                    </div>
                </div>

                <Carousel title={'Vistos por último'} />

                <Carousel title={'Talvez você goste'} />
            </div>
        </Wrapper>
    )
}

export default ProductPage
