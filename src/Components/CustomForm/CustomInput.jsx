import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CustomInput = ({ id, placeholder, register, errors, type }) => {
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
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`relative h-11 w-[49%]`}
        >
            <motion.input
                id={id}
                name={id}
                type={type}
                {...register(id)}
                onBlur={handleBlur}
                onFocus={() => setActive(true)}
                layoutId={`${[id]}InputAnimation`}
                className={`size-full rounded-sm border border-solid border-neutral-300 pl-2 ${active && 'border-blue-400'} ${errors[id] && 'border-red-500'}`}
            />

            <motion.label
                layoutId={`${[id]}PlaceHolderAnimation`}
                transition={{ duration: 0.1, ease: 'easeIn' }}
                className={`pointer-events-none absolute left-2 bg-white text-neutral-400 ${active ? '-top-2 px-1 text-xs tracking-wider text-neutral-600' : 'top-[30%]'}`}
            >
                {placeholder}
            </motion.label>

            {errors[id] && <p className="pt-1 text-sm leading-none text-red-500">{errors[id].message}</p>}

            <p />
        </motion.div>
    )
}

export default CustomInput
