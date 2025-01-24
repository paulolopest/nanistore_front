import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import * as Icon from '@phosphor-icons/react'
import { GlobalContext } from '../../Context/GlobalContext'
import ToggleButton from '../ToggleButton/ToggleButton'

const ProfileModal = () => {
    const { theme, setTheme } = useContext(GlobalContext)

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -right-2 top-9 z-10 flex h-64 w-60 flex-col justify-between rounded-xl bg-white pt-4 font-light shadow-hover"
        >
            <div>
                <ul className="flex flex-col border-b border-solid border-neutral-100 px-3 pb-2">
                    <li className="flex h-10 w-full items-center gap-x-3 rounded-md px-1 hover:bg-neutral-100">
                        <Icon.User className="size-5" />
                        <p className="text-subtitle">Perfil</p>
                    </li>
                    <li className="flex h-10 w-full items-center gap-x-3 rounded-md px-1 hover:bg-neutral-100">
                        <Icon.ShoppingBagOpen className="size-5" />
                        <p className="text-subtitle">Carrinho</p>
                    </li>
                </ul>

                <div className="flex justify-between border-b border-solid border-neutral-100 px-3 py-2">
                    <div className="flex items-center gap-3 px-1">
                        <Icon.Moon className="size-5" />
                        <p className="text-subtitle">Modo escuro</p>
                    </div>
                    <ToggleButton
                        state={theme}
                        setState={setTheme}
                        id={'theme'}
                        firstIcon={<Icon.Sun />}
                        secondIcon={<Icon.Moon />}
                    />
                </div>
            </div>

            <div className="flex items-center border-t border-solid border-neutral-100 px-3 py-2">
                <div className="flex w-full items-center gap-3 rounded-md px-1 py-2 hover:bg-neutral-100">
                    <Icon.SignOut />
                    <p className="text-subtitle">Sair</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProfileModal
