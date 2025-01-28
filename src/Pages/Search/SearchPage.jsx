import React from 'react'
import { items } from '../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import Sorter from './../../Components/SearchPage/Sorter'
import ProductCard from '../../Components/ProductCard/ProductCard'
import CustomSelect from '../../Components/CustomForm/CustomSelect'

const SearchPage = () => {
    const productMap = items.map((item) => (
        <ProductCard key={item.id} item={item} className={'h-[30rem] w-[275px]'} />
    ))

    return (
        <Wrapper>
            <div className="flex w-full gap-8 py-40">
                <div className="flex h-full w-60 flex-col gap-4 border ">
                    <Sorter title={'Tipo'} list={['Oversized', 'Dry-fit', 'Camiseta']} />

                    <Sorter title={'Cor'} list={['Preta', 'Branca', 'Cinza', 'Vermelha']} />

                    <button className="rounded-md bg-neutral-800 py-3 text-white shadow-default transition ease-linear hover:bg-neutral-700">
                        Aplicar
                    </button>
                </div>

                <div className="flex w-full flex-col gap-8">
                    <header className="flex w-full items-center justify-between">
                        <div className="flex gap-8">
                            <CustomSelect
                                icon={<Icon.ArrowsDownUp />}
                                name={'Ordenar'}
                                list={['Ordem crescente', 'Ordem decrescente']}
                            />

                            <CustomSelect
                                icon={<Icon.ListPlus />}
                                name={'Exibir'}
                                list={['20 por página', '40 por página', '60 por página', '80 por página']}
                            />
                        </div>
                    </header>

                    <div className="grid grid-cols-4 gap-x-2 gap-y-8 ">{productMap}</div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SearchPage
