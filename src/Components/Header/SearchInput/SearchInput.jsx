import SearchDropDown from './SearchDropDown'
import React, { useRef, useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GlobalContext } from '../../../Context/GlobalContext'

const SearchInput = ({ state, setState, label, icon, bg, ...props }) => {
    const inputRef = useRef(null)

    const { openDropDown, searchDropDown, setSearchDropDown } = useContext(GlobalContext)

    const handleBlur = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setSearchDropDown(false)
        }
    }

    return (
        <div
            style={{ backgroundColor: bg }}
            className={`relative flex h-10 w-[40rem] flex-col rounded-md max-912:w-[35rem] max-896:w-[33rem] max-md:w-[25rem] max-sm:w-80  max-580:w-80 ${searchDropDown ? 'shadow-lg' : 'shadow-sm'}`}
            onBlur={handleBlur}
        >
            <motion.input
                {...props}
                value={state}
                ref={inputRef}
                placeholder={label}
                onFocus={() => openDropDown('search')}
                onChange={(e) => setState(e.target.value)}
                style={{ backgroundColor: bg, border: '1px solid transparent' }}
                className={`relative z-10 size-full ${searchDropDown ? 'rounded-t-md' : 'rounded-md'} pl-10 font-light text-neutral-600`}
                whileFocus={{
                    backgroundColor: 'white',
                }}
            />
            <div
                className={`absolute z-20 flex size-[40px] h-full cursor-pointer items-center justify-center px-3 ${searchDropDown ? 'text-neutral-600' : 'text-neutral-400'}`}
            >
                {icon}
            </div>

            <AnimatePresence>{searchDropDown && <SearchDropDown />}</AnimatePresence>
        </div>
    )
}

export default SearchInput
