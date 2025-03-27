import React from 'react'
import { motion } from 'framer-motion'

const BannerBig = ({ img, ...props }) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            {...props}
            className="h-[32rem] cursor-pointer rounded-xl max-1366:h-[25rem] max-1280:h-[28rem] max-1024:h-[25rem] max-md:h-80 max-640:h-64 max-540:h-56 max-460:h-32"
        >
            <img className="size-full select-none rounded-xl object-cover" src={img} alt="Big banner" />
        </motion.div>
    )
}

export default BannerBig
