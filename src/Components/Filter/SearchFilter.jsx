import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import Sorter from '../SearchPage/Sorter'

const SearchFilter = () => {
    const [showFilter, setShowFilter] = useState(false)

    return (
        <motion.div
            className={`fixed right-0 top-0 h-screen w-full transition ease-linear ${showFilter && 'backdrop-brightness-75'}`}
        >
            <motion.div
                layout
                onClick={() => setShowFilter(true)}
                className={`fixed bottom-[3%] right-[5%] flex items-center gap-2 rounded-2xl bg-neutral-700 px-4 py-2 text-neutral-100 shadow-md`}
            >
                <p>Filtrar</p>
                <Icon.Funnel />
            </motion.div>

            <AnimatePresence>
                {showFilter && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '75%' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flexCol fixed bottom-0 w-full  items-center justify-between bg-white py-3"
                    >
                        <div
                            onClick={() => setShowFilter(false)}
                            className="flex-center absolute -top-10 right-2 size-8 rounded-full bg-white text-neutral-400"
                        >
                            <Icon.X className="size-3/5" />
                        </div>

                        <div className="z-50 grid w-full grid-cols-2 gap-y-4">
                            <motion.div>
                                <Sorter
                                    title={'Tipo'}
                                    list={['Oversized', 'Dry-fit', 'Camiseta']}
                                    className={'shadow-none'}
                                />
                            </motion.div>

                            <motion.div>
                                <Sorter
                                    title={'Cor'}
                                    list={['Preta', 'Branca', 'Cinza', 'Vermelha']}
                                    className={'shadow-none'}
                                />
                            </motion.div>

                            <motion.div>
                                <Sorter
                                    title={'Ordernar'}
                                    list={['Preço crescente', 'Preço decrescente']}
                                    className={'shadow-none'}
                                />
                            </motion.div>

                            <motion.div>
                                <Sorter
                                    title={'Exibir'}
                                    list={[
                                        '20 por página',
                                        '40 por página',
                                        '60 por página',
                                        '80 por página',
                                    ]}
                                    className={'shadow-none'}
                                />
                            </motion.div>
                        </div>

                        <button className="w-[95%] rounded-xl bg-neutral-700 py-2 text-sm text-neutral-100">
                            Aplicar
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default SearchFilter
