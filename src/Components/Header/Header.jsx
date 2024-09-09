import Logo from './../../Assets/Logo'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { tabs } from './../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'
import React, { useContext, useState } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import { GlobalContext } from '../../Context/GlobalContext'

const Header = () => {
    const [activeTab, setActiveTab] = useState(null)
    const { theme, setTheme } = useContext(GlobalContext)

    const tabMap = tabs.map((tab) => (
        <div
            className="flex justify-center items-center relative px-4 py-3"
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
        >
            {activeTab === tab.id && (
                <motion.div
                    transition={{ type: 'spring', duration: 0.5 }}
                    key={tab.id}
                    layoutId="activeTab"
                    className="absolute top-0 rounded-md h-full w-full bg-red-600"
                />
            )}
            <Link
                className={`relative w-full h-full z-10 ${tab.id === activeTab ? 'text-white' : 'text-black'}`}
                to={`products/${tab.id}`}
            >
                {tab.label}
            </Link>
        </div>
    ))

    return (
        <header className="flex-col px-16 mb-8">
            <section className="flex flex-row justify-between items-center py-2 w-full">
                <Logo width={70} height={70} />

                <div className="relative bg-yellow-200 h-8 w-96 rounded-md ">
                    <motion.input className=" pl-3 pr-9 relative bg-gray-100 w-full h-full rounded-md" />
                    <Icon.MagnifyingGlass className="absolute right-2 top-[6px] w-5 h-5 pointer text-gray-500 cursor-pointer" />
                </div>

                <nav className="flex items-center gap-10 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:cursor-pointer">
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

            <nav className="flex justify-between items-center px-36 h-16 w-full pb-3 border-solid border-b-[1px] border-gray-50000">
                {tabMap}
            </nav>
        </header>
    )
}

export default Header
