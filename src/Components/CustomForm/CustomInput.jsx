import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useRef } from 'react'
import { items } from '../../Utils/Extra'
import { Link } from 'react-router-dom'

const CustomInput = ({ state, setState, label, icon, w, h, bg, ...props }) => {
    const [searchCtr, setSearchCtr] = useState(false)
    const inputRef = useRef(null)

    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setSearchCtr(false)
        }
    }

    return (
        <div
            style={{ width: w, height: h, backgroundColor: bg }}
            className="relative flex flex-col rounded-md shadow-default"
            onBlur={handleBlur}
        >
            <motion.input
                ref={inputRef}
                style={{ backgroundColor: bg, border: '1px solid transparent' }}
                className={`relative z-10 size-full ${searchCtr ? 'rounded-t-md' : 'rounded-md'} pl-10 font-light text-neutral-800`}
                value={state}
                placeholder={label}
                onChange={(e) => setState(e.target.value)}
                onFocus={() => setSearchCtr(true)}
                whileFocus={{
                    backgroundColor: 'white',
                }}
                {...props}
            />
            <div className="absolute z-20 flex h-full cursor-pointer items-center justify-center px-3 text-neutral-400">
                {icon}
            </div>

            <AnimatePresence>
                {searchCtr && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        exit={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ boxShadow: '0px 16px 20px #00000029' }}
                        className="absolute left-0 top-9 z-20 mt-1 w-full rounded-b-md bg-white pb-1 uppercase"
                    >
                        <Link
                            draggable="false"
                            className="select-none"
                            onClick={() => setSearchCtr(false)}
                            to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
                        >
                            <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                                <img src={items[1].src[0]} alt="product image" className="size-14" />

                                <div className="flex flex-col gap-1 ">
                                    <p className="text-xl font-semibold leading-none">{items[1].name}</p>
                                    <p className="text-xs italic leading-none text-neutral-500">
                                        {items[1].type}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            draggable="false"
                            className="select-none"
                            onClick={() => setSearchCtr(false)}
                            to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
                        >
                            <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                                <img src={items[2].src[0]} alt="product image" className="size-14" />

                                <div className="flex flex-col gap-1">
                                    <p className="text-xl font-semibold leading-none">{items[2].name}</p>
                                    <p className="text-xs italic leading-none text-neutral-500">
                                        {items[2].type}
                                    </p>
                                </div>
                            </div>{' '}
                        </Link>

                        <Link
                            draggable="false"
                            className="select-none"
                            onClick={() => setSearchCtr(false)}
                            to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
                        >
                            <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                                <img src={items[3].src[0]} alt="product image" className="size-14" />

                                <div className="flex flex-col gap-1">
                                    <p className="text-xl font-semibold leading-none">{items[3].name}</p>
                                    <p className="text-xs italic leading-none text-neutral-500">
                                        {items[3].type}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            draggable="false"
                            className="select-none"
                            onClick={() => setSearchCtr(false)}
                            to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
                        >
                            <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                                <img src={items[4].src[0]} alt="product image" className="size-14" />

                                <div className="flex flex-col gap-1">
                                    <p className="text-xl font-semibold leading-none">{items[4].name}</p>
                                    <p className="text-xs italic leading-none text-neutral-500">
                                        {items[4].type}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        <Link
                            draggable="false"
                            className="select-none"
                            onClick={() => setSearchCtr(false)}
                            to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
                        >
                            <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                                <img src={items[4].src[0]} alt="product image" className="size-14" />

                                <div className="flex flex-col gap-1">
                                    <p className="text-xl font-semibold leading-none">{items[4].name}</p>
                                    <p className="text-xs italic leading-none text-neutral-500">
                                        {items[4].type}
                                    </p>
                                </div>
                            </div>{' '}
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CustomInput
