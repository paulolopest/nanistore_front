import React from 'react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import PriceRange from '../../Components/SearchPage/PriceRange'
import Sorter from './../../Components/SearchPage/Sorter'
import * as Icon from '@phosphor-icons/react'
import { items } from '../../Utils/Extra'
import ProductCard from '../../Components/ProductCard/ProductCard'

const SearchPage = () => {
    const productMap = items.map((item) => (
        <ProductCard key={item.id} item={item} className={'h-[30rem] w-[290px]'} />
    ))

    return (
        <Wrapper>
            <div className="flex w-full gap-8 py-40">
                <div className="flex h-full w-60 flex-col gap-4 border ">
                    <PriceRange />

                    <Sorter title={'Tipo'} list={['Oversized', 'Dry-fit', 'Camiseta']} />

                    <Sorter title={'Cor'} list={['Preta', 'Branca']} />
                </div>

                <div className="flex w-full flex-col gap-8">
                    <header className="flex w-full items-center justify-between">
                        <div className="flex gap-8">
                            <div className="flex w-full items-center gap-2 text-neutral-500">
                                <Icon.ArrowsDownUp />

                                <div className="flex w-48 justify-between rounded-md bg-white p-2  ">
                                    <p>Ordernar</p>

                                    <Icon.CaretDown weight="bold" />
                                </div>
                            </div>

                            <div className="flex w-full items-center gap-2 text-neutral-500">
                                <Icon.RowsPlusBottom />

                                <div className="flex w-48 justify-between rounded-md bg-white p-2  ">
                                    <p>Exibir</p>

                                    <Icon.CaretDown weight="bold" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-16">
                            <p className="text-neutral-500">9 Produtos</p>

                            <div className="flex gap-6 [&>svg]:size-6">
                                <Icon.ListBullets />
                                <Icon.SquaresFour />
                            </div>
                        </div>
                    </header>

                    <div className="flex flex-wrap gap-x-9 gap-y-4">{productMap}</div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SearchPage
