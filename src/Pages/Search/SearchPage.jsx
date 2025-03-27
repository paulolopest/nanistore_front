import React, { useEffect } from 'react'
import { items } from '../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import Sorter from './../../Components/SearchPage/Sorter'
import ProductCard from '../../Components/ProductCard/ProductCard'
import CustomSelect from '../../Components/CustomForm/CustomSelect'
import { motion, useAnimate } from 'framer-motion'
import MobileProductCard from '../../Components/ProductCard/MobileProductCard'

const SearchPage = () => {
    const [scope, animate] = useAnimate()
    const productMap = items.map((item, index) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index / 10 }}
            key={item.id}
        >
            <MobileProductCard item={item} style={'h-80 w-full max-580:h-72 max-540:h-64'} />
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
        <Wrapper>
            <motion.div ref={scope} className="flex w-full gap-8 py-36 text-neutral-600 max-680:py-20">
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
                    <header className="flex w-full items-center justify-between">
                        <div className="flex gap-8">
                            <motion.div id="selectOrder" initial={{ opacity: 0, x: 20 }}>
                                <CustomSelect
                                    icon={<Icon.ArrowsDownUp />}
                                    name={'Ordenar'}
                                    list={['Ordem crescente', 'Ordem decrescente']}
                                />
                            </motion.div>

                            <motion.div id="selectShow" initial={{ opacity: 0, x: 20 }}>
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

                    <div className="grid grid-cols-4 gap-5 max-1280:grid-cols-3 max-768:grid-cols-2 max-500:gap-3">
                        {productMap}
                    </div>
                </div>
            </motion.div>
        </Wrapper>
    )
}

export default SearchPage
