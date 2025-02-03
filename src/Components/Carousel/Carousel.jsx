import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../../Utils/Extra'
import ProductCard from '../ProductCard/ProductCard'

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
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.01 }}
                    >
                        <ProductCard item={item} index={index} />
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
            className="flex w-full flex-col gap-y-1 "
        >
            <h1 className="text-2xl font-semibold uppercase tracking-wide">{title}</h1>
            <div className="w-full overflow-hidden py-5">
                <motion.div
                    drag="x"
                    onDragEnd={dragEnd}
                    onDragStart={dragStart}
                    className="flex gap-6"
                    dragConstraints={{ left: -2000, right: 0 }}
                >
                    {itemMap}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Carousel
