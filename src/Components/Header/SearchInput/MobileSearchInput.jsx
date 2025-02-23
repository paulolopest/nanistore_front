import { motion } from 'framer-motion'
import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'

const MobileSearchInput = ({ setState }) => {
    const [searchInput, setSearchInput] = useState('')

    return (
        <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute left-0 top-0 z-40 h-screen w-full p-4 backdrop-blur-sm backdrop-brightness-50"
        >
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                exit={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative min-h-12 w-full overflow-hidden rounded-xl bg-white shadow-md"
            >
                <div>
                    <div className="flex-center absolute h-11 w-10 pt-1 text-neutral-600">
                        <Icon.MagnifyingGlass />
                    </div>

                    <input
                        autoFocus
                        // onBlur={() => setState(false)}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="search"
                        className="absolute h-12 w-full border border-x-0 border-t-0 border-solid border-neutral-200 pl-10 pt-1  r text-neutral-600"
                        placeholder="Pesquisar"
                    />
                    <div
                        onClick={() => setState(false)}
                        className="flex-center absolute right-0 z-50 h-11 w-10 bg-white pt-1 text-neutral-600"
                    >
                        <Icon.X />
                    </div>
                </div>

                <div className="flex-center mt-12 py-8">
                    <p className="text-sm text-neutral-400">Nenhuma busca recente</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default MobileSearchInput
