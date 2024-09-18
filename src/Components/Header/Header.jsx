import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { tabs } from './../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'
import React, { useContext, useState } from 'react'
import CustomInput from '../CustomForm/CustomInput'
import ToggleButton from '../ToggleButton/ToggleButton'
import WhiteLogo from '../../Assets/logo/logobranca.png'
import BlackLogo from '../../Assets/logo/logopreta.webp'
import { GlobalContext } from '../../Context/GlobalContext'

const Header = () => {
    const [activeTab, setActiveTab] = useState(null)
    const [searchValue, setSearchValue] = useState('')

    const { theme, setTheme } = useContext(GlobalContext)

    const tabMap = tabs.map((tab) => (
        <div
            className="relative flex items-center justify-center px-4 py-3"
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
        >
            {activeTab === tab.id && (
                <motion.div
                    transition={{ type: 'spring', duration: 0.5 }}
                    layoutId="headerActiveTab"
                    className="absolute top-0 size-full rounded-md bg-red-600"
                />
            )}
            <Link
                className={`relative z-10 size-full text-sm font-medium ${tab.id === activeTab ? 'text-white' : 'text-neutral-800'}`}
            >
                {tab.label}
            </Link>
        </div>
    ))

    return (
        <header className="flex-col px-24 uppercase">
            <section className="flex w-full flex-row items-center justify-between py-2">
                <Link to={'/'} className="cursor-pointer">
                    <img
                        className="w-[70px]"
                        src={theme === 'start' ? WhiteLogo : BlackLogo}
                        alt="Site Logo"
                    />
                </Link>

                <CustomInput
                    bg="#f5f5f5"
                    h="2.5rem"
                    w="25rem"
                    icon={<Icon.MagnifyingGlass />}
                    label="Pesquisar"
                    state={searchValue}
                    setState={setSearchValue}
                />

                <nav className="flex items-center gap-10 [&>svg]:size-6 [&>svg]:cursor-pointer">
                    <ToggleButton
                        state={theme}
                        setState={setTheme}
                        id={'theme'}
                        firstIcon={<Icon.Moon />}
                        secondIcon={<Icon.Sun />}
                    />
                    <Icon.ShoppingBagOpen />
                    <Icon.User />
                </nav>
            </section>

            <nav className="flex h-16 w-full items-center justify-between px-24 max-sm:hidden">{tabMap}</nav>
        </header>
    )
}

export default Header
