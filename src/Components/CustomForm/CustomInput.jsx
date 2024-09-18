import React from 'react'
import { motion } from 'framer-motion'

const CustomInput = ({ state, setState, label, icon, w, h, bg, ...props }) => {
    return (
        <div style={{ width: w, height: h, backgroundColor: bg }} className={`relative flex rounded-md `}>
            <motion.input
                style={{ backgroundColor: bg, border: '1px solid transparent' }}
                className="relative size-full rounded-md pl-10 text-neutral-800"
                value={state}
                placeholder={label}
                onChange={(e) => setState(e.target.value)}
                whileFocus={{ border: '1px solid #dc2626' }}
                {...props}
            />
            <div className="absolute flex h-full cursor-pointer items-center justify-center px-3 text-neutral-800">
                {icon}
            </div>
        </div>
    )
}

export default CustomInput
