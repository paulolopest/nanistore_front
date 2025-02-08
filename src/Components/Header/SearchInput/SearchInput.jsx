import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useContext } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext'
import SearchDropDown from './SearchDropDown'

const SearchInput = ({ state, setState, label, icon, bg, css, ...props }) => {
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
            className={`relative flex h-10 w-[40rem] flex-col rounded-md shadow-sm ${css}`}
            onBlur={handleBlur}
        >
            <motion.input
                ref={inputRef}
                style={{ backgroundColor: bg, border: '1px solid transparent' }}
                className={`relative z-10 size-full ${searchDropDown ? 'rounded-t-md' : 'rounded-md'} pl-10 font-light text-neutral-800`}
                value={state}
                placeholder={label}
                onChange={(e) => setState(e.target.value)}
                onFocus={() => openDropDown('search')}
                whileFocus={{
                    backgroundColor: 'white',
                }}
                {...props}
            />
            <div
                className={`absolute z-20 flex size-[40px] h-full cursor-pointer items-center justify-center px-3 text-neutral-400`}
            >
                {icon}
            </div>

            <AnimatePresence>{searchDropDown && <SearchDropDown />}</AnimatePresence>
        </div>
    )
}

export default SearchInput
