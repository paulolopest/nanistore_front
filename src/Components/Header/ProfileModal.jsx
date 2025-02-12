import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import * as Icon from '@phosphor-icons/react'
import ToggleButton from '../ToggleButton/ToggleButton'
import { GlobalContext } from '../../Context/GlobalContext'

const ProfileModal = () => {
    const { theme, setTheme, setCartDropDown } = useContext(GlobalContext)

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -right-2 top-9 z-50 flex h-64 w-60 flex-col justify-between rounded-xl bg-white pt-2 font-light shadow-hover max-1024:right-0 "
        >
            <div>
                <ul className="flex flex-col border-b border-solid border-neutral-100 ">
                    <Link
                        to={'/profile'}
                        className="flex h-10 w-full items-center gap-x-3 px-4 py-2 hover:bg-neutral-100"
                    >
                        <Icon.User className="size-5" />
                        <p className="text-subtitle">Perfil</p>
                    </Link>
                    <Link
                        to={'/cart'}
                        onClick={() => setCartDropDown(false)}
                        className="flex h-10 w-full items-center gap-x-3 px-4 py-2 hover:bg-neutral-100"
                    >
                        <Icon.ShoppingBagOpen className="size-5" />
                        <p className="text-subtitle">Carrinho</p>
                    </Link>
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

            <div className="flex items-center border-t border-solid border-neutral-100 ">
                <div className="flex w-full items-center gap-3 rounded-b-xl px-4 py-3 hover:bg-neutral-100">
                    <Icon.SignOut />
                    <p className="text-subtitle">Sair</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProfileModal
