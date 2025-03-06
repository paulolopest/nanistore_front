import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import * as Icon from '@phosphor-icons/react'
import useMediaQuery from '../../Hooks/useMediaQuery'
import ToggleButton from '../ToggleButton/ToggleButton'
import { GlobalContext } from '../../Context/GlobalContext'

const ProfileModal = () => {
    const { theme, setTheme, setCartDropDown, setProfileDropDown } = useContext(GlobalContext)

    const smScreen = useMediaQuery('(max-width: 641px)')

    const variants = smScreen
        ? {
              initial: { opacity: 0, x: -100 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 100 },
          }
        : {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -10 },
          }

    return (
        <div
            className={`${smScreen && 'absolute left-0 top-0 z-50 h-screen w-screen backdrop-brightness-50 max-640:flex max-640:justify-end max-640:gap-2'}`}
        >
            {smScreen && (
                <div
                    onClick={() => setProfileDropDown(false)}
                    className="flex-center right-0 top-0 mt-2 size-8 flex-row rounded-full bg-neutral-100 p-2"
                >
                    <Icon.X className="size-full text-neutral-600" />
                </div>
            )}

            <motion.div
                initial={variants.initial}
                animate={variants.animate}
                exit={variants.exit}
                className="-right-2 top-9 z-50 flex h-64 w-60 flex-col justify-between overflow-hidden rounded-xl bg-white pt-2 font-light text-neutral-600 shadow-hover max-1024:right-0 max-640:right-0 max-640:top-0 max-640:h-screen max-640:w-72 max-640:rounded-none 640:absolute"
            >
                <div>
                    <ul className="flex flex-col border-b border-solid border-neutral-100 ">
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
                    </ul>

                    <div className="flex justify-between border-b border-solid border-neutral-100 px-3 py-2">
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
                </div>

                <div className="flex items-center border-t border-solid border-neutral-100 ">
                    <div className="flex w-full items-center gap-3 px-4 py-3 hover:bg-neutral-100">
                        <Icon.SignOut />
                        <p className="">Sair</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProfileModal
