import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'
import ProfileModal from './ProfileModal'
import { tabs } from './../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'
import React, { useContext, useState } from 'react'
import CustomInput from '../CustomForm/CustomInput'
import { AnimatePresence, motion } from 'framer-motion'
import WhiteLogo from '../../Assets/logo/logobranca.png'
import BlackLogo from '../../Assets/logo/logopreta.webp'
import { GlobalContext } from '../../Context/GlobalContext'
import CartModal from './CartModal'

const Header = () => {
    const [activeTab, setActiveTab] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [showCartModal, setShowCartModal] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)

    const { theme, setTheme } = useContext(GlobalContext)

    const tabMap = tabs.map((tab) => (
        <div
            className="relative flex select-none items-center justify-center px-4 py-3"
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
        >
            {activeTab === tab.id && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    layoutId="headerActiveTab"
                    className={`absolute top-0 size-full rounded-md  bg-red-600 shadow-hover`}
                />
            )}
            <Link
                draggable={false}
                className={`relative z-10 size-full text-center text-sm font-light leading-none tracking-wider ${tab.id === activeTab && 'text-white'}`}
            >
                {tab.label}
            </Link>
        </div>
    ))

    return (
        <header className="fixed z-50 w-full  bg-white shadow-default">
            <Wrapper>
                <header className="flex w-full flex-row items-start justify-between pb-1.5 pt-3">
                    <Link to={'/'} className="flex h-12 w-[88px] cursor-pointer select-none">
                        <img
                            className="size-12 select-none object-contain"
                            src={theme === 'start' ? WhiteLogo : BlackLogo}
                            alt="Site Logo"
                        />
                    </Link>

                    <div className="flex flex-col items-center gap-4">
                        <CustomInput
                            bg="#f5f5f6"
                            h="2.5rem"
                            w="40rem"
                            icon={<Icon.MagnifyingGlass />}
                            label="Pesquisar"
                            state={searchValue}
                            setState={setSearchValue}
                        />

                        <nav className="flex w-full items-center justify-center gap-8 max-sm:hidden">
                            {tabMap}
                        </nav>
                    </div>

                    <nav className="flex h-12 items-center gap-10 [&>svg]:size-6 [&>svg]:cursor-pointer">
                        <div className="relative size-6 cursor-pointer">
                            <Icon.ShoppingBagOpen
                                className="size-full"
                                onClick={() => setShowCartModal(!showCartModal)}
                            />

                            <AnimatePresence>{showCartModal && <CartModal />}</AnimatePresence>
                        </div>

                        <div className="relative size-6 cursor-pointer">
                            <Icon.User
                                className="size-full"
                                onClick={() => setShowProfileModal(!showProfileModal)}
                            />

                            <AnimatePresence>{showProfileModal && <ProfileModal />}</AnimatePresence>
                        </div>
                    </nav>
                </header>
            </Wrapper>
        </header>
    )
}

export default Header
