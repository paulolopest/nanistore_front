import React from 'react'
import { items } from '../../Utils/Extra'
import ProductCard from '../ProductCard/ProductCard'

const ComboBanner = () => {
    return (
        <div className="flex w-full justify-between gap-10">
            <div className=" size-full rounded-md bg-neutral-500" />
            <div className="flex gap-10">
                <ProductCard item={items[0]} />
                <ProductCard item={items[1]} />
            </div>
        </div>
    )
}

export default ComboBanner
