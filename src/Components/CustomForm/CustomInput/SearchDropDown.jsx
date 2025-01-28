import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { items } from '../../../Utils/Extra'
import { GlobalContext } from '../../../Context/GlobalContext'

const SearchDropDown = () => {
    const { openDropDown } = useContext(GlobalContext)

    return (
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
                onClick={() => openDropDown('search')}
                to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
            >
                <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                    <img src={items[1].src[0]} alt="product image" className="size-14" />

                    <div className="flex flex-col gap-1 ">
                        <p className="text-xl font-semibold leading-none">{items[1].name}</p>
                        <p className="text-xs italic leading-none text-neutral-500">{items[1].type}</p>
                    </div>
                </div>
            </Link>
            <Link
                draggable="false"
                className="select-none"
                onClick={() => openDropDown('search')}
                to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
            >
                <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                    <img src={items[1].src[0]} alt="product image" className="size-14" />

                    <div className="flex flex-col gap-1 ">
                        <p className="text-xl font-semibold leading-none">{items[1].name}</p>
                        <p className="text-xs italic leading-none text-neutral-500">{items[1].type}</p>
                    </div>
                </div>
            </Link>
            <Link
                draggable="false"
                className="select-none"
                onClick={() => openDropDown('search')}
                to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
            >
                <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                    <img src={items[1].src[0]} alt="product image" className="size-14" />

                    <div className="flex flex-col gap-1 ">
                        <p className="text-xl font-semibold leading-none">{items[1].name}</p>
                        <p className="text-xs italic leading-none text-neutral-500">{items[1].type}</p>
                    </div>
                </div>
            </Link>
            <Link
                draggable="false"
                className="select-none"
                onClick={() => openDropDown('search')}
                to={`/product/${items[0].id}/${items[0].name.replaceAll(' ', '').toLowerCase()}`}
            >
                <div className="flex h-16 w-full cursor-pointer items-center gap-2 px-2 transition ease-linear hover:bg-neutral-100">
                    <img src={items[1].src[0]} alt="product image" className="size-14" />

                    <div className="flex flex-col gap-1 ">
                        <p className="text-xl font-semibold leading-none">{items[1].name}</p>
                        <p className="text-xs italic leading-none text-neutral-500">{items[1].type}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default SearchDropDown
