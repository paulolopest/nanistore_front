import React from 'react'
import { motion } from 'framer-motion'

const BannerBig = ({ img, ...props }) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            {...props}
            className="h-[32rem] cursor-pointer rounded-xl"
        >
            <img className="size-full rounded-xl object-cover" src={img} alt="Big banner" />
        </motion.div>
    )
}

export default BannerBig
