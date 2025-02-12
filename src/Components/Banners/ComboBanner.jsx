import { motion } from 'framer-motion'
import { items } from '../../Utils/Extra'
import React, { useContext, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import MobileProductCard from '../ProductCard/MobileProductCard'
import { GlobalContext } from '../../Context/GlobalContext'

const ComboBanner = () => {
    const [isDragging, setIsDragging] = useState(false)

    const { smScreen, mdScreen, lgScreen } = useContext(GlobalContext)

    const dragStart = () => setIsDragging(true)
    const dragEnd = () => setIsDragging(false)
    const preventClick = (e) => {
        if (isDragging) e.preventDefault()
    }

    return (
        <div className="max-540:flexCol flex w-full justify-between gap-6 max-md:gap-4">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="size-full rounded-xl bg-neutral-500 max-540:h-36 max-420:h-32"
            />

            <div className={`${smScreen && 'overflow-x-hidden'}`}>
                <motion.div
                    className="flex w-full justify-between gap-6 max-1024:flex-col max-md:gap-4 max-540:flex-row"
                    drag={smScreen && 'x'}
                    onDragEnd={dragEnd}
                    onDragStart={dragStart}
                    dragConstraints={{ left: -200, right: 0 }}
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                    >
                        {lgScreen ? <MobileProductCard item={items[1]} /> : <ProductCard item={items[1]} />}
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                    >
                        {lgScreen ? <MobileProductCard item={items[1]} /> : <ProductCard item={items[1]} />}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default ComboBanner
