import React from 'react'
import { motion } from 'framer-motion'

const DoubleBanner = ({ img1, img2 }) => {
    return (
        <div className="flex h-44 w-full grid-cols-2 gap-4 max-1160:h-40 max-1080:h-36 max-950:h-32 max-844:h-28 max-768:h-36 max-540:h-28 max-420:h-24">
            <motion.img
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={img1}
                alt="mini banner"
                className="size-full rounded-xl object-cover object-bottom"
            />
            <motion.img
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={img2}
                alt="mini banner"
                className="size-full rounded-xl object-cover object-center max-768:hidden"
            />
        </div>
    )
}

export default DoubleBanner
