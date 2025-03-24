import { z } from 'zod'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as Icon from '@phosphor-icons/react'
import { motion, useAnimate } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../../Components/IconsComponent/Logo'
import GoogleLogo from '../../Components/IconsComponent/GoogleLogo'
import CustomInput from './../../Components/CustomForm/CustomInput'
import useMediaQuery from '../../Hooks/useMediaQuery'

const schema = z.object({
    emailSignup: z.string().email(),
    passwordSignup: z.string(),
    confirmPasswordSignup: z.string(),
})

const SignupPage = () => {
    const [scope, animate] = useAnimate()

    const smScreen = useMediaQuery('(max-width: 581px)')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleAnimate = async () => {
        await animate('#signupCtr', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
        await animate('#signupFormHdr', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
        await animate('#signupForm', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
        await animate('#signupBtnForm', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
        await animate('#signupGoogleBtn', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
    }

    useEffect(() => {
        handleAnimate()
    }, [])

    return (
        <motion.div ref={scope} className="flex-center flexCol h-screen w-full">
            <motion.div
                id="signupCtr"
                initial={{ y: 40, opacity: 0 }}
                className="flex-center  w-[35rem] flex-col gap-8 rounded-xl bg-white px-20 py-10 shadow-lg max-580:size-full max-580:rounded-none max-580:px-16 max-580:text-sm max-580:shadow-none max-500:px-12 max-460:px-5"
            >
                <motion.div
                    id="signupFormHdr"
                    initial={{ opacity: 0, y: 20 }}
                    className="flex-center flexCol gap-4"
                >
                    <Link to={'/'} className="flex-center size-32 cursor-pointer select-none">
                        <Logo />
                    </Link>

                    <div className="flexCol flex-center">
                        <p className="text-2xl font-bold   text-neutral-600">Cadastre</p>
                        <p className="text-sm text-neutral-400">Para fazer compras no site</p>
                    </div>
                </motion.div>

                <motion.form
                    id="signupForm"
                    initial={{ opacity: 0, y: 20 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-4"
                >
                    <CustomInput
                        id={'emailSignup'}
                        placeholder={'E-mail'}
                        register={register}
                        errors={errors}
                        style={'rounded-lg'}
                        h={'3rem'}
                        w={`100%`}
                        icon={<Icon.Envelope />}
                    />

                    <CustomInput
                        id={'passwordSignup'}
                        placeholder={'Senha'}
                        register={register}
                        errors={errors}
                        h={`${smScreen ? '2.5rem' : '3rem'}`}
                        w={`100%`}
                    />

                    <CustomInput
                        id={'confirmPasswordSignup'}
                        placeholder={'Confirme a senha'}
                        register={register}
                        errors={errors}
                        h={`${smScreen ? '2.5rem' : '3rem'}`}
                        w={`100%`}
                    />
                </motion.form>

                <motion.button
                    id="signupBtnForm"
                    initial={{ opacity: 0, y: 20 }}
                    type="submit"
                    form="signupForm"
                    className="w-full rounded-md bg-neutral-800 py-4 text-lg leading-none text-neutral-100 hover:bg-neutral-700 max-580:py-3 max-580:text-sm"
                >
                    Cadastrar
                </motion.button>

                <div className="relative my-4 h-tiny w-full bg-neutral-200">
                    <p className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-neutral-400">
                        Ou
                    </p>
                </div>

                <motion.div
                    id="signupGoogleBtn"
                    initial={{ opacity: 0, y: 20 }}
                    className="flexCol w-full gap-6"
                >
                    <button className="transitionIn flex-center  gap-2 rounded-md border border-solid border-neutral-200 py-4 text-neutral-400 hover:border-neutral-800 hover:bg-neutral-800 hover:text-neutral-100 max-580:text-sm">
                        <GoogleLogo style={'size-5'} /> Cadastre com o Google
                    </button>

                    <p className="w-full text-center text-sm text-neutral-400">
                        Ja tem uma conta?{' '}
                        <Link to={'/login'} className="hover:text-neutral-700 hover:underline">
                            Entre na sua conta
                        </Link>
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default SignupPage
