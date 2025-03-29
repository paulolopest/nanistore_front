import React, { useEffect } from 'react'
import { items } from '../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import Sorter from './../../Components/SearchPage/Sorter'
import CustomSelect from '../../Components/CustomForm/CustomSelect'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import MobileProductCard from '../../Components/ProductCard/MobileProductCard'
import ProductCard from '../../Components/ProductCard/ProductCard'
import useMediaQuery from '../../Hooks/useMediaQuery'
import SearchFilter from '../../Components/Filter/SearchFilter'

const SearchPage = () => {
    const [scope, animate] = useAnimate()

    const mdScreen = useMediaQuery('(max-width:1281px)')
    const smScreen = useMediaQuery('(max-width:768px)')

    const productMap = items.map((item, index) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index / 10 }}
            key={item.id}
        >
            {mdScreen ? (
                <MobileProductCard
                    item={item}
                    style={
                        'h-80 max-420:h-[20rem] max-1280:size-[19rem] max-1200:size-[18rem] max-1160:size-[17rem] max-1080:size-[16rem] max-1024:size-[19rem] max-950:size-[17rem] max-844:size-[15.5rem] max-768:w-full max-768:h-[22rem] max-640:size-[17rem] max-640:w-full max-500:w-full max-420:text-xs'
                    }
                />
            ) : (
                <ProductCard
                    item={item}
                    className={'max-1600:h-[30rem] max-1600:w-72 max-1440:h-[32rem] max-1440:w-[19rem]'}
                />
            )}
        </motion.div>
    ))

    const handleAnimate = async () => {
        await animate('#typeSorte', { opacity: 1, y: 0 }, { duration: 0.2, ease: 'easeInOut' })
        animate('#selectOrder', { opacity: 1, x: 0 }, { duration: 0.2, ease: 'easeInOut' })
        await animate('#colorSorter', { opacity: 1, y: 0 }, { duration: 0.2, ease: 'easeInOut' })
        animate('#selectShow', { opacity: 1, x: 0 }, { duration: 0.2, ease: 'easeInOut' })
        animate('#btnApply', { opacity: 1, y: 0 }, { duration: 0.2, ease: 'easeInOut' })
    }

    useEffect(() => {
        handleAnimate()
    }, [])

    return (
        <Wrapper className={'px-0'}>
            <motion.div
                ref={scope}
                className="relative flex w-full gap-8 py-36 text-neutral-600 max-768:py-[9.5rem] max-680:py-[4.5rem]"
            >
                <div className="flex h-full w-60 flex-col gap-4 border max-1024:hidden">
                    <motion.div layout id="typeSorte" initial={{ opacity: 0, y: 20 }}>
                        <Sorter title={'Tipo'} list={['Oversized', 'Dry-fit', 'Camiseta']} />
                    </motion.div>

                    <motion.div id="colorSorter" initial={{ opacity: 0, y: 20 }}>
                        <Sorter title={'Cor'} list={['Preta', 'Branca', 'Cinza', 'Vermelha']} />
                    </motion.div>

                    <motion.button
                        id="btnApply"
                        initial={{ opacity: 0, y: 20 }}
                        className="rounded-md bg-neutral-800 py-3 text-neutral-100 shadow-default hover:bg-neutral-700"
                    >
                        Aplicar
                    </motion.button>
                </div>

                <div className="flex w-full flex-col gap-8">
                    <header className="flex w-full items-center justify-between max-768:hidden">
                        <div className="flex gap-8">
                            <motion.div id="selectOrder" initial={{ opacity: 0, x: 20 }}>
                                <CustomSelect
                                    icon={<Icon.ArrowsDownUp />}
                                    name={'Ordenar'}
                                    list={['Ordem crescente', 'Ordem decrescente']}
                                />
                            </motion.div>

                            <motion.div
                                id="selectShow"
                                initial={{ opacity: 0, x: 20 }}
                                className="max-500:hidden"
                            >
                                <CustomSelect
                                    icon={<Icon.ListPlus />}
                                    name={'Exibir'}
                                    list={[
                                        '20 por página',
                                        '40 por página',
                                        '60 por página',
                                        '80 por página',
                                    ]}
                                />
                            </motion.div>
                        </div>
                    </header>

                    <div className="grid grid-cols-4 gap-4 max-1440:grid-cols-3 max-768:w-full max-768:grid-cols-2 max-500:gap-2 max-420:grid-cols-1">
                        {productMap}
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>{smScreen && <SearchFilter />}</AnimatePresence>
        </Wrapper>
    )
}

export default SearchPage
