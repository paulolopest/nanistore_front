import React from 'react'
import { items } from '../../Utils/Extra'
import { motion } from 'framer-motion'
import ProductCard from '../ProductCard/ProductCard'

const Carousel = ({ title }) => {
    const itemMap = items.map((item) => <ProductCard key={item.id} item={item} />)

    return (
        <div className="flex flex-col w-full gap-y-5 px-28 ">
            <h1 className="text-2xl uppercase font-semibold">{title}</h1>
            <div className="w-full overflow-hidden p-2">
                <motion.div drag="x" dragConstraints={{ left: -2000, right: 0 }} className="flex gap-10">
                    {itemMap}
                </motion.div>
            </div>
        </div>
    )
}

export default Carousel
