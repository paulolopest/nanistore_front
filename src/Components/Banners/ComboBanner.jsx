import React from 'react'
import { items } from '../../Utils/Extra'
import ProductCard from '../ProductCard/ProductCard'

const ComboBanner = () => {
    return (
        <div className="w-full px-28 flex  justify-between gap-10">
            <div className=" w-full h-[30rem] bg-neutral-500 rounded-md" />
            <div className="flex gap-10">
                <ProductCard item={items[0]} />
                <ProductCard item={items[1]} />
            </div>
        </div>
    )
}

export default ComboBanner
