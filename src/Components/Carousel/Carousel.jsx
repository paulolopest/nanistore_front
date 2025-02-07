import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../../Utils/Extra'
import ProductCard from '../ProductCard/ProductCard'
import MobileProductCard from '../ProductCard/MobileProductCard'

const Carousel = ({ title }) => {
    const [isDragging, setIsDragging] = useState(false)

    const dragStart = () => setIsDragging(true)
    const dragEnd = () => setIsDragging(false)
    const preventClick = (e) => {
        if (isDragging) e.preventDefault()
    }

    const itemMap =
        items?.length > 0 ? (
            items.map((item, index) => (
                <Link
                    key={item.id}
                    draggable="false"
                    onClick={preventClick}
                    className="select-none"
                    to={`/product/${item.id}/${item.name.replaceAll(' ', '').toLowerCase()}`}
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: index * 0.01 }}
                    >
                        {/* <ProductCard item={item} index={index} className={'max-md:size-full'} /> */}
                        <MobileProductCard item={item} index={index} />
                    </motion.div>
                </Link>
            ))
        ) : (
            <div className="text-center text-gray-500">Carregando itens...</div>
        )

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex w-full flex-col"
        >
            <h1 className="text-2xl font-semibold uppercase tracking-wide max-md:text-lg">{title}</h1>
            <div className="w-full overflow-hidden py-4 max-md:py-2">
                <motion.div
                    drag="x"
                    onDragEnd={dragEnd}
                    onDragStart={dragStart}
                    dragConstraints={{ left: -2000, right: 0 }}
                    className="max-md:flexCol flex gap-6 max-md:h-[35.5rem] max-md:flex-wrap max-md:gap-3 max-md:py-1"
                >
                    {itemMap}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Carousel
