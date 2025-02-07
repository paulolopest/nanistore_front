import React from 'react'
import { motion } from 'framer-motion'

const DoubleBanner = ({ img1, img2 }) => {
    return (
        <div className="grid grid-cols-2 justify-between gap-8 max-md:h-52 max-md:grid-cols-1 max-580:h-44 max-460:h-32 max-420:h-28 [&>img]:size-full [&>img]:rounded-xl">
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
                viewport={{ once: true }}
                src={img2}
                alt="mini banner"
                className="max-md:hidden"
            />
        </div>
    )
}

export default DoubleBanner
