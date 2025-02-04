import React from 'react'
import { motion } from 'framer-motion'

const DoubleBanner = ({ img1, img2 }) => {
    return (
        <div className="flex justify-between [&>img]:h-60 [&>img]:w-[48%] [&>img]:cursor-pointer [&>img]:rounded-xl">
            <motion.img
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={img1}
                alt="mini banner"
            />
            <motion.img
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                src={img2}
                alt="mini banner"
            />
        </div>
    )
}

export default DoubleBanner
