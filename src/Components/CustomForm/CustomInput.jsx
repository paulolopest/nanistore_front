import { motion } from 'framer-motion'
import React, { useState } from 'react'

const CustomInput = ({ id, placeholder, register, errors, type, style, w, h }) => {
    const [active, setActive] = useState(false)

    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            if (e.target.value.length > 0) {
                return null
            } else {
                setActive(false)
            }
        }
    }

    return (
        <motion.div layout className={`relative ${errors[id] && 'mb-1'}`} style={{ width: w, height: h }}>
            <motion.input
                id={id}
                name={id}
                type={type}
                {...register(id)}
                onBlur={handleBlur}
                onFocus={() => setActive(true)}
                layoutId={`${[id]}InputAnimation`}
                className={`size-full rounded-md border border-solid pl-2 text-neutral-600 ${active ? 'border-blue-400' : 'border-neutral-300'} ${errors[id] && 'border-red-500'} ${style}`}
            />

            <motion.label
                layoutId={`${[id]}PlaceHolderAnimation`}
                transition={{ duration: 0.1, ease: 'easeIn' }}
                className={`pointer-events-none absolute left-3  bg-white text-neutral-400 ${active ? '-top-2 left-4 px-1 text-xs' : 'top-[33%]'}`}
            >
                {placeholder}
            </motion.label>

            {errors[id] && <p className="h-fit w-full pb-1 text-sm text-red-500">{errors[id].message}</p>}
        </motion.div>
    )
}

export default CustomInput
