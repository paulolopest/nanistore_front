import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Icon from '@phosphor-icons/react'
import { items, sizes } from './../../Utils/Extra'
import Wrapper from '../../Components/Wrapper/Wrapper'
import BodyExample from '../../Assets/images/women-body-measurments.png'
import Carousel from '../../Components/Carousel/Carousel'

const ProductPage = () => {
    const { productId } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [showedImage, setShowedImage] = useState(0)
    const [size, setSize] = useState({ activeSize: '', sizeId: '' })

    const [sizeTable, setSizeTable] = useState(false)

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
            <div className="flex w-full flex-col gap-12 py-36">
                <div className="flex w-full justify-between">
                    <div className="flex flex-col gap-10">
                        <div className="flex h-[48rem] w-[60.5rem] items-center justify-between gap-10 rounded-xl bg-white p-8 shadow-default max-lg:h-[40rem] max-lg:w-full">
                            <div className="flex h-full flex-col gap-y-10">{srcMap}</div>

                            <div className="flex size-full items-center justify-center rounded-xl p-2">
                                <motion.img
                                    key={showedImage}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="size-full cursor-zoom-in object-contain"
                                    src={item[0].src[showedImage]}
                                    alt="Imagem do Produto"
                                />
                            </div>
                        </div>

                        <div className="flex w-[60.5rem] flex-col gap-4 rounded-xl bg-white p-8 shadow-default">
                            <h1 className="text-3xl font-extrabold uppercase">Descrição</h1>

                            <p className="font-light leading-tight text-neutral-500">
                                A camiseta {item[0].type} combina estilo e funcionalidade de um jeito leve e
                                prático. Feita 100% algodão, essa camiseta oferece a proteção solar que você
                                precisa, com fator de proteção FPS50+ (aplicado diretamente na peça). Possui
                                gola redonda e mangas longas, que protegem os seus braços e te deixam mais à
                                vontade. É ideal para os dias ensolarados em que você quer se proteger e
                                evitar a exposição aos raios solares. É uma ótima opção para quem tem pele
                                sensível e não quer se expor ao sol.{' '}
                            </p>
                        </div>

                        <div className="flex w-full justify-between rounded-xl">
                            <motion.div className="flex w-[60.5rem] flex-col gap-5 rounded-xl bg-white p-8 shadow-default">
                                <div className="flex w-full justify-between">
                                    <h1 className="text-3xl font-extrabold uppercase">Tabela de medidas</h1>
                                    <Icon.CaretDown
                                        className="cursor-pointer text-3xl"
                                        onClick={() => setSizeTable(!sizeTable)}
                                    />
                                </div>

                                {sizeTable && (
                                    <>
                                        <div className="flex gap-10 border-y border-solid border-neutral-200 py-4 text-lg font-bold uppercase">
                                            <p className="text-red-500">Homens</p>
                                            <p>Mulheres</p>
                                        </div>

                                        <div className="flex flex-col justify-center gap-16">
                                            <div className="flex flex-col gap-6">
                                                <h1 className="font-bold uppercase text-neutral-400">
                                                    Tabela de medidas masculinas
                                                </h1>

                                                <div className="flex w-[40.75rem] gap-20 font-light [&>div]:flex [&>div]:flex-col  [&>div]:items-center [&>div]:gap-10">
                                                    <div className="flex flex-col uppercase">
                                                        <h1 className=" font-bold">Tamanho</h1>
                                                        <p>pp</p>
                                                        <p>p</p>
                                                        <p>m</p>
                                                        <p>g</p>
                                                        <p>gg</p>
                                                        <p>xgg</p>
                                                    </div>

                                                    <div>
                                                        <h1 className=" font-bold">Busto</h1>
                                                        <p>79-86</p>
                                                        <p>87-94</p>
                                                        <p>95-102</p>
                                                        <p>103-110</p>
                                                        <p>111-118</p>
                                                        <p>119-126</p>
                                                    </div>

                                                    <div>
                                                        <h1 className=" font-bold">Cintura</h1>
                                                        <p>73-78</p>
                                                        <p>79-84</p>
                                                        <p>85-90</p>
                                                        <p>91-98</p>
                                                        <p>99-106</p>
                                                        <p>107-116</p>
                                                    </div>

                                                    <div>
                                                        <h1 className=" font-bold">Quadril</h1>
                                                        <p>84-89</p>
                                                        <p>91-97</p>
                                                        <p>98-104</p>
                                                        <p>105-112</p>
                                                        <p>113-120</p>
                                                        <p>121-128</p>
                                                    </div>

                                                    <div>
                                                        <h1 className=" font-bold">Entrepernas</h1>
                                                        <p>79</p>
                                                        <p>80</p>
                                                        <p>81</p>
                                                        <p>82</p>
                                                        <p>83</p>
                                                        <p>84</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex w-[40.75rem] flex-col gap-2 font-normal uppercase">
                                                <h1 className="font-bold text-neutral-400">Como medir?</h1>
                                                <p className="text-sm text-neutral-400">
                                                    Meça sempre em pé, com roupas leves. Utilize sempre uma
                                                    fita métrica mantendo na horizontal, contornando por
                                                    completo a área desejada, sem pressionar. Após a medição,
                                                    verifique na tabela o tamanho correspondente.
                                                </p>
                                            </div>

                                            <div className="flex gap-10">
                                                <div className="flex w-[30.50rem] flex-col justify-between text-lg font-light text-neutral-700">
                                                    <p>
                                                        <span className="font-bold">Busto:</span> Meça a volta
                                                        total do busto (a parte mais volumosa do tronco).
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">Cintura:</span> Meça a
                                                        volta total da cintura (a parte mais estreita do
                                                        tronco), cerca de dois dedos acima do umbigo.
                                                    </p>
                                                    <p>
                                                        <span className="font-bold">Quadril:</span> Meça a
                                                        volta total do quadril (a parte mais larga do tronco),
                                                        pouco abaixo da cintura.
                                                    </p>

                                                    <p>
                                                        <span className="font-bold">Entrepernas:</span>Meça a
                                                        distância total entre o início da parte da coxa e o
                                                        calcanhar.
                                                    </p>
                                                </div>

                                                <div>
                                                    <img src={BodyExample} alt="Exemplo de corpo" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-6">
                                                <h1 className="font-bold uppercase text-neutral-400">
                                                    Tabela de conversão masculina
                                                </h1>

                                                <div className="flex w-[40.75rem] gap-20 font-light [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-8">
                                                    <div className="flex flex-col uppercase">
                                                        <h1 className=" font-bold">br</h1>
                                                        <p>pp</p>
                                                        <p>p</p>
                                                        <p>m</p>
                                                        <p>g</p>
                                                        <p>gg</p>
                                                    </div>

                                                    <div>
                                                        <h1 className=" font-bold">US</h1>
                                                        <p>XS</p>
                                                        <p>S</p>
                                                        <p>M</p>
                                                        <p>L</p>
                                                        <p>XL</p>
                                                    </div>

                                                    <div>
                                                        <h1 className=" font-bold">UK</h1>
                                                        <p>8</p>
                                                        <p>10</p>
                                                        <p>12</p>
                                                        <p>14</p>
                                                        <p>16</p>
                                                    </div>

                                                    <div>
                                                        <h1 className=" font-bold">FR</h1>
                                                        <p>36</p>
                                                        <p>38</p>
                                                        <p>40</p>
                                                        <p>42</p>
                                                        <p>44</p>
                                                    </div>

                                                    <div>
                                                        <h1 className=" font-bold">IT</h1>
                                                        <p>40</p>
                                                        <p>42</p>
                                                        <p>44</p>
                                                        <p>46</p>
                                                        <p>48</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>

                    <div className="sticky top-36 flex h-[48rem] w-[32rem] flex-col justify-between rounded-xl bg-white p-8 shadow-default">
                        <div className="flex flex-col gap-5">
                            <span className="w-fit border-b border-solid border-b-neutral-200 pb-1 pr-3 text-sm font-semibold uppercase text-neutral-400">
                                Novo | 120389 vendidos
                            </span>

                            <div className=" text-3xl font-extrabold uppercase">
                                <p className="relative">{item[0].name} </p>
                                <p className=" text-2xl font-bold italic text-neutral-600">{item[0].type}</p>
                            </div>

                            <div className="flex cursor-pointer items-center gap-1 text-sm uppercase text-green-400 hover:underline">
                                <p>Tabela de medidas</p>
                                <Icon.Ruler className="text-xl" />
                            </div>

                            <div className="flex gap-5">{sizeMap}</div>

                            <div className="flex flex-col justify-start gap-2 text-2xl font-semibold uppercase">
                                <p className="text-lg text-neutral-400 line-through">
                                    De: R$ {(item[0].price - 0.01).toFixed(2).replace('.', ',')}
                                </p>
                                <p className="relative flex shrink-0 items-center gap-3 text-5xl font-extrabold">
                                    Por: R${' '}
                                    {(item[0].price - 0.01 - item[0].price / 10).toFixed(2).replace('.', ',')}{' '}
                                    <span className="absolute right-0 rounded-md bg-green-500 px-2 py-1 text-lg text-white">
                                        -10%
                                    </span>
                                </p>
                                <div className="text-lg text-neutral-500">
                                    <p className="text-xs">À vista ou</p>
                                    <p>
                                        6x de R${(item[0].price / 6).toFixed(2).replaceAll('.', ',')} sem
                                        juros
                                    </p>
                                </div>
                            </div>

                            <div className="flex h-10 w-32 items-center justify-between rounded-md border border-solid border-neutral-200 px-1 transition duration-200 ease-linear hover:border-neutral-700 [&>div]:flex [&>div]:h-full [&>div]:w-1/5 [&>div]:cursor-pointer [&>div]:items-center [&>div]:justify-center">
                                <div onClick={() => modifyQuantity('decrease')}>
                                    <Icon.CaretDown />
                                </div>
                                <p className="text-lg font-semibold">{quantity}</p>
                                <div onClick={() => modifyQuantity('sum')}>
                                    <Icon.CaretUp />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 [&>button]:py-4 [&>button]:transition [&>button]:duration-200 [&>button]:ease-in-out ">
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
