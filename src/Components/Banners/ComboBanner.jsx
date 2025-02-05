import React from 'react'
import { motion } from 'framer-motion'
import { items } from '../../Utils/Extra'
import ProductCard from '../ProductCard/ProductCard'

const ComboBanner = () => {
    return (
        <div className="flex w-full justify-between gap-10">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                className=" size-full rounded-xl bg-neutral-500"
            />

            <div className="flex gap-10">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.1 }}
                >
                    <ProductCard item={items[0]} />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.2 }}
                >
                    <ProductCard item={items[1]} />
                </motion.div>
            </div>
        </div>
    )
}

export default ComboBanner
