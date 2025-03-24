import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import * as Icon from '@phosphor-icons/react'
import ToggleButton from '../../ToggleButton/ToggleButton'
import { GlobalContext } from '../../../Context/GlobalContext'

const MobileProfileModal = () => {
    const { theme, setTheme, setProfileDropDown } = useContext(GlobalContext)

    return (
        <motion.div className="absolute top-0 z-50 flex h-screen w-full justify-end font-light text-neutral-500 backdrop-brightness-50">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={() => setProfileDropDown(false)}
                className="flex h-full w-12 justify-center pt-4"
            >
                <div className="flex-center size-9 cursor-pointer rounded-full bg-neutral-100">
                    <Icon.X />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex h-full w-72 flex-col justify-between bg-white pt-4"
            >
                <ul className="flex flex-col">
                    <Link
                        to={'/profile'}
                        className="flex h-10 w-full items-center gap-x-3 px-4 py-2 hover:bg-neutral-100"
                    >
                        <Icon.User className="size-5" />
                        <p className="">Perfil</p>
                    </Link>
                    <Link
                        to={'/cart'}
                        onClick={() => setCartDropDown(false)}
                        className="flex h-10 w-full items-center gap-x-3 px-4 py-2 hover:bg-neutral-100"
                    >
                        <Icon.ShoppingBagOpen className="size-5" />
                        <p className="">Carrinho</p>
                    </Link>

                    <div className="flex justify-between border-y border-solid border-neutral-100 px-3 py-2">
                        <div className="flex items-center gap-3 px-1">
                            <Icon.Moon className="size-5" />
                            <p className="">Modo escuro</p>
                        </div>
                        <ToggleButton
                            state={theme}
                            setState={setTheme}
                            id={'theme'}
                            firstIcon={<Icon.Sun />}
                            secondIcon={<Icon.Moon />}
                        />
                    </div>
                </ul>

                <div className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 hover:bg-neutral-100">
                    <Icon.SignOut />
                    <p className="">Sair</p>{' '}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default MobileProfileModal
