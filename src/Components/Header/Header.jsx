import { z } from 'zod'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'
import ProfileModal from './ProfileModal'
import Logo from '../IconsComponent/Logo'
import { useForm } from 'react-hook-form'
import { tabs } from './../../Utils/Extra'
import CartModal from './CartModal/CartModal'
import * as Icon from '@phosphor-icons/react'
import React, { useContext, useState } from 'react'
import SearchInput from './SearchInput/SearchInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { GlobalContext } from '../../Context/GlobalContext'
import MobileSearchInput from './SearchInput/MobileSearchInput'

const schema = z.object({
    name: z.string(),
    lastName: z.string(),
    password: z.string(),
    newPassword: z.string(),
    email: z.string().email(),
    number: z.string().max(11).min(11),
})

const Header = () => {
    const [activeTab, setActiveTab] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const [mobileSearch, setMobileSearch] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const { openDropDown, profileDropDown, cartDropDown } = useContext(GlobalContext)

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
                    className={`absolute top-0 size-full rounded-md bg-red-600 shadow-hover`}
                />
            )}
            <Link
                draggable={false}
                className={`relative size-full text-center text-sm  leading-none text-neutral-600 ${tab.id === activeTab && 'text-white'}`}
            >
                {tab.label}
            </Link>
        </div>
    ))

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed z-50 w-full bg-white shadow-default "
        >
            <Wrapper className={'flexCol max-844:gap-2'}>
                <div className="flex w-full flex-row items-center justify-between py-2 max-540:py-1">
                    <AnimatePresence>
                        {mobileSearch && <MobileSearchInput setState={setMobileSearch} />}
                    </AnimatePresence>

                    <Link to={'/'} className="flex h-12 cursor-pointer select-none justify-start max-540:h-8">
                        <Logo />
                    </Link>

                    <div className="relative flex size-full items-center justify-center max-540:hidden">
                        <SearchInput
                            bg="#f5f5f6"
                            icon={<Icon.MagnifyingGlass />}
                            label="Pesquisar"
                            state={searchValue}
                            setState={setSearchValue}
                        />
                    </div>

                    <nav className="flex h-12 items-center gap-10 text-neutral-600 max-540:gap-6 [&>svg]:size-6 [&>svg]:cursor-pointer">
                        <div
                            onClick={() => setMobileSearch(true)}
                            className="relative flex items-center justify-start  min-[540px]:hidden"
                        >
                            <Icon.MagnifyingGlass className="size-5" />
                        </div>
                        <div className="relative size-6 cursor-pointer max-540:size-5">
                            <Icon.ShoppingBagOpen
                                className="size-full"
                                onClick={() => openDropDown('cart')}
                            />
                        </div>

                        <div className="relative size-6 cursor-pointer max-540:size-5">
                            <Icon.User className="size-full" onClick={() => openDropDown('profile')} />
                        </div>
                    </nav>
                </div>

                <nav className="flex w-full items-center justify-center gap-8 bg-white pb-2 pt-1 max-680:hidden">
                    {tabMap}
                </nav>
            </Wrapper>

            <AnimatePresence>
                {cartDropDown && <CartModal />}
                {profileDropDown && <ProfileModal />}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header
