import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'
import ProfileModal from './ProfileModal'
import Logo from '../IconsComponent/Logo'
import { tabs } from './../../Utils/Extra'
import CartModal from './CartModal/CartModal'
import * as Icon from '@phosphor-icons/react'
import React, { useContext, useEffect, useState } from 'react'
import SearchInput from './SearchInput/SearchInput'
import { AnimatePresence, motion } from 'framer-motion'
import { GlobalContext } from '../../Context/GlobalContext'
import CustomInput from './../CustomForm/CustomInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

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
    const [mobileInput, setMobileInput] = useState(false)
    const [searchValue, setSearchValue] = useState('')

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

    console.log(mobileInput)

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
                className={`relative size-full text-center text-sm leading-none tracking-wider text-neutral-600 ${tab.id === activeTab && 'text-white'}`}
            >
                {tab.label}
            </Link>
        </div>
    ))

    useEffect(() => {
        if (mobileInput) {
            const originalState = window.history.state

            // Adiciona um novo estado ao histórico
            window.history.pushState({ isInputOpen: true }, '')

            const handlePopState = (event) => {
                // Fecha o input quando o botão de voltar é pressionado
                if (event.state?.isInputOpen) {
                    setMobileInput(false)
                    // Restaura o estado original do histórico
                    window.history.replaceState(originalState, '')
                }
            }

            window.addEventListener('popstate', handlePopState)

            return () => {
                window.removeEventListener('popstate', handlePopState)

                // Limpa o estado do histórico se o componente desmontar
                if (window.history.state?.isInputOpen) {
                    window.history.replaceState(originalState, '')
                }
            }
        }
    }, [mobileInput])

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed z-50 w-full bg-white shadow-default "
        >
            <Wrapper className={'flexCol max-844:gap-2'}>
                <div className="flex w-full flex-row items-center justify-between py-2 max-540:py-1">
                    <div
                        onClick={() => setMobileInput(true)}
                        className="relative flex h-12 w-[88px] items-center justify-start max-540:w-[64px] min-[540px]:hidden"
                    >
                        <Icon.MagnifyingGlass className="size-5 text-neutral-600" />
                    </div>

                    <AnimatePresence>
                        {mobileInput && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                exit={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute right-0 top-0 z-50 h-14 w-full bg-white px-5 py-3"
                            >
                                <motion.input
                                    autoFocus
                                    onBlur={() => setMobileInput(false)}
                                    className="size-full rounded-md border border-solid border-neutral-200 pl-2 shadow-sm"
                                />
                                <Icon.MagnifyingGlass className="absolute right-8 top-[35%]" />
                            </motion.div>
                        )}
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

                    <nav className="flex h-12 items-center gap-10 max-540:gap-6 [&>svg]:size-6 [&>svg]:cursor-pointer">
                        <div className="relative size-6 cursor-pointer max-540:size-5">
                            <Icon.ShoppingBagOpen
                                className="size-full"
                                onClick={() => openDropDown('cart')}
                            />

                            <AnimatePresence>{cartDropDown && <CartModal />}</AnimatePresence>
                        </div>

                        <div className="relative size-6 cursor-pointer max-540:size-5">
                            <Icon.User className="size-full" onClick={() => openDropDown('profile')} />

                            <AnimatePresence>{profileDropDown && <ProfileModal />}</AnimatePresence>
                        </div>
                    </nav>
                </div>

                <nav className="flex w-full items-center justify-center gap-8 bg-white pb-2 pt-1 max-680:hidden">
                    {tabMap}
                </nav>
            </Wrapper>
        </motion.header>
    )
}

export default Header
