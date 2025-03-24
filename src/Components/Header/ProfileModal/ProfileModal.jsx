import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import * as Icon from '@phosphor-icons/react'
import ToggleButton from '../../ToggleButton/ToggleButton'
import { GlobalContext } from '../../../Context/GlobalContext'
import useMediaQuery from '../../../Hooks/useMediaQuery'
import MobileProfileModal from './MobileProfileModal'

const ProfileModal = () => {
    const { theme, setTheme, setCartDropDown } = useContext(GlobalContext)

    const smScreen = useMediaQuery('(max-width: 641px)')

    return smScreen ? (
        <MobileProfileModal />
    ) : (
        <div className={`absolute right-14 top-14 z-50 max-2xl:right-6`}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="z-50 flex h-64 w-60 flex-col justify-between overflow-hidden rounded-xl bg-white pt-2 font-light text-neutral-600 shadow-hover"
            >
                <div>
                    <ul className="flex flex-col border-b border-solid border-neutral-100 ">
                        <Link
                            to={'/profile'}
                            className="flex h-10 w-full items-center gap-x-3 px-4 py-2 hover:bg-neutral-100"
                        >
                            <Icon.User className="size-5" />
                            <p>Perfil</p>
                        </Link>
                        <Link
                            to={'/cart'}
                            onClick={() => setCartDropDown(false)}
                            className="flex h-10 w-full items-center gap-x-3 px-4 py-2 hover:bg-neutral-100"
                        >
                            <Icon.ShoppingBagOpen className="size-5" />
                            <p>Carrinho</p>
                        </Link>
                    </ul>

                    <div className="flex justify-between border-b border-solid border-neutral-100 px-3 py-2">
                        <div className="flex items-center gap-3 px-1">
                            <Icon.Moon className="size-5" />
                            <p>Modo escuro</p>
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
                    <div className="flex w-full items-center gap-3 px-4 py-3 hover:bg-neutral-100">
                        <Icon.SignOut />
                        <p>Sair</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProfileModal
