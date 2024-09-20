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

    const itemMap = items.map((item) => (
        <Link
            key={item.id}
            draggable="false"
            onClick={preventClick}
            className="select-none"
            to={`/product/${item.id}/${item.name.replaceAll(' ', '').toLowerCase()}`}
        >
            <ProductCard item={item} />
        </Link>
    ))

    return (
        <div className="flex w-full flex-col gap-y-1 ">
            <h1 className="text-2xl font-semibold uppercase tracking-wide">{title}</h1>
            <div className="w-full overflow-hidden py-5">
                <motion.div
                    drag="x"
                    onDragEnd={dragEnd}
                    onDragStart={dragStart}
                    className="flex gap-8"
                    dragConstraints={{ left: -2000, right: 0 }}
                >
                    {itemMap}
                </motion.div>
            </div>
        </div>
    )
}

export default Carousel
