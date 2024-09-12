import React from 'react'
import { motion } from 'framer-motion'

const CustomInput = ({ state, setState, label, icon, w, h, bg }) => {
    return (
        <div style={{ width: w, height: h, backgroundColor: bg }} className={`flex relative rounded-md `}>
            <motion.input
                style={{ backgroundColor: bg, border: '1px solid transparent' }}
                className="w-full h-full relative rounded-md pl-10"
                value={state}
                placeholder={label}
                onChange={(e) => setState(e.target.value)}
                whileFocus={{ border: '1px solid #dc2626' }}
            />
            <div className="flex justify-center items-center absolute px-3 h-full cursor-pointer">{icon}</div>
        </div>
    )
}

export default CustomInput
