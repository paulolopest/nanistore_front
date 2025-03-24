import { z } from 'zod'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion, useAnimate } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../../Components/IconsComponent/Logo'
import CustomInput from '../../Components/CustomForm/CustomInput'
import GoogleLogo from '../../Components/IconsComponent/GoogleLogo'
import useMediaQuery from '../../Hooks/useMediaQuery'

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
})

const LoginPage = () => {
    const [scope, animate] = useAnimate()

    const smScreen = useMediaQuery('(max-width: 581px)')

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

    const handleAnimate = async () => {
        await animate('#loginCtr', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
        await animate('#loginFormHdr', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
        await animate('#loginForm', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
        await animate('#loginBtnForm', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
        await animate('#loginGoogleBtn', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
    }

    useEffect(() => {
        handleAnimate()
    }, [])

    return (
        <motion.div ref={scope} className="flex-center flexCol h-screen w-full  ">
            <motion.div
                layout
                id="loginCtr"
                initial={{ y: 40, opacity: 0 }}
                className="flex-center  w-[35rem] flex-col gap-8 rounded-xl bg-white px-20 py-10 shadow-lg max-580:size-full max-580:rounded-none max-580:px-16 max-580:text-sm max-580:shadow-none max-500:px-12 max-460:px-5"
            >
                <motion.div
                    id="loginFormHdr"
                    initial={{ opacity: 0, y: 20 }}
                    className="flex-center flexCol gap-4"
                >
                    <Link to={'/'} className="flex-center size-32 cursor-pointer select-none">
                        <Logo />
                    </Link>

                    <div className="flexCol flex-center">
                        <p className="text-2xl font-bold text-neutral-600">Entre</p>
                        <p className="text-sm text-neutral-400">Para acessar a sua conta</p>
                    </div>
                </motion.div>

                <motion.form
                    id="loginForm"
                    initial={{ opacity: 0, y: 20 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex w-full flex-col gap-4"
                >
                    <CustomInput
                        id={'email'}
                        placeholder={'E-mail'}
                        register={register}
                        errors={errors}
                        style={'rounded-lg'}
                        w={`100%`}
                        h={`${smScreen ? '2.5rem' : '3rem'}`}
                    />

                    <div className="flexCol gap-1">
                        <CustomInput
                            id={'password'}
                            placeholder={'Senha'}
                            register={register}
                            errors={errors}
                            w={`100%`}
                            h={`${smScreen ? '2.5rem' : '3rem'}`}
                        />

                        <p className="w-fit cursor-pointer text-xs text-neutral-400 underline hover:text-neutral-700">
                            Esqueci minha senha
                        </p>
                    </div>
                </motion.form>

                <motion.button
                    type="submit"
                    form="loginForm"
                    id="loginBtnForm"
                    disabled={isSubmitting}
                    initial={{ opacity: 0, y: 20 }}
                    className="w-full rounded-md bg-neutral-800 py-4 text-lg leading-none text-neutral-100 hover:bg-neutral-700 disabled:bg-neutral-600 max-580:py-3 max-580:text-sm"
                >
                    Continuar
                </motion.button>

                <div className="relative my-4 h-tiny w-full bg-neutral-200">
                    <p className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-neutral-300">
                        Ou
                    </p>
                </div>

                <motion.div
                    id="loginGoogleBtn"
                    initial={{ opacity: 0, y: 20 }}
                    className="flexCol w-full gap-6"
                >
                    <button className="transitionIn flex-center w-full gap-2 rounded-md border border-solid border-neutral-200 py-4 text-neutral-400 hover:border-neutral-800 hover:bg-neutral-800 hover:text-neutral-100">
                        <GoogleLogo style={'size-5'} /> Continue com o Google
                    </button>

                    <p className="w-full text-center text-sm text-neutral-400">
                        Não tem uma conta?{' '}
                        <Link to={'/signup'} className="hover:text-neutral-700 hover:underline">
                            Crie aqui
                        </Link>
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default LoginPage
