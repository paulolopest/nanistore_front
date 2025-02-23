import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { items } from '../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'
import MobileProductCard from '../ProductCard/MobileProductCard'
import ProductCard from './../ProductCard/ProductCard'
import useMediaQuery from '../../Hooks/useMediaQuery'

const Carousel = ({ title }) => {
    const [isDragging, setIsDragging] = useState(false)

    const isMobile = useMediaQuery('(max-width: 768px)')

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
                        {!isMobile ? (
                            <ProductCard item={item} index={index} className={'max-md:size-full'} />
                        ) : (
                            <MobileProductCard item={item} index={index} />
                        )}
                    </motion.div>
                </Link>
            ))
        ) : (
            <div className="text-center text-neutral-600">Carregando itens...</div>
        )

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex w-full flex-col"
        >
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold uppercase max-md:text-base">{title}</h1>
                <div className="flex cursor-pointer items-center gap-2  text-neutral-400 max-460:text-sm max-460:leading-none">
                    <p>Ver mais</p>
                    <Icon.ArrowRight />
                </div>
            </div>
            <div className="w-full overflow-hidden py-4 max-md:py-2">
                <motion.div
                    drag="x"
                    onDragEnd={dragEnd}
                    onDragStart={dragStart}
                    dragConstraints={{ left: !isMobile ? -2000 : -2200, right: 0 }}
                    className=" flex gap-6   max-md:gap-3 max-md:py-1 "
                >
                    {itemMap}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Carousel
