import { z } from 'zod'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as Icon from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../../Components/IconsComponent/Logo'
import CustomInput from '../../Components/CustomForm/CustomInput'
import GoogleLogo from '../../Components/IconsComponent/GoogleLogo'

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
})

const LoginPage = () => {
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

    return (
        <div className="flex-center flexCol h-screen w-full">
            <motion.div
                layout
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="flex-center w-[35rem] flex-col gap-8 rounded-xl bg-white py-10 shadow-lg"
            >
                <div className="flex-center flexCol gap-4">
                    <Link to={'/'} className="flex-center size-32 cursor-pointer select-none">
                        <Logo />
                    </Link>

                    <div className="flexCol flex-center">
                        <p className="text-2xl font-bold tracking-wide text-neutral-600">Entre</p>
                        <p className="text-sm leading-none text-neutral-400">Para acessar a sua conta</p>
                    </div>
                </div>

                <form id="loginForm" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <CustomInput
                        id={'email'}
                        placeholder={'E-mail'}
                        register={register}
                        errors={errors}
                        style={'rounded-lg'}
                        h={'3rem'}
                        w={'25rem'}
                        icon={<Icon.Envelope />}
                    />

                    <div className="flexCol gap-1">
                        <CustomInput
                            id={'password'}
                            placeholder={'Senha'}
                            register={register}
                            errors={errors}
                            h={'3rem'}
                            w={'25rem'}
                        />

                        <p className="w-fit cursor-pointer text-xs text-neutral-400 underline hover:text-neutral-800">
                            Esqueci minha senha
                        </p>
                    </div>
                </form>

                <button
                    type="submit"
                    form="loginForm"
                    disabled={isSubmitting}
                    className="transitionIn w-[25rem] rounded-md bg-neutral-800 py-4 text-lg leading-none text-neutral-100 hover:bg-neutral-700 disabled:bg-neutral-600"
                >
                    Entrar
                </button>

                <div className="relative my-4 h-tiny w-[25rem] bg-neutral-200">
                    <p className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-neutral-400">
                        Ou
                    </p>
                </div>

                <div className="flexCol gap-6">
                    <button className="transitionIn flex-center w-[25rem] gap-2 rounded-md border border-solid border-neutral-200 py-4 text-neutral-400 hover:border-neutral-800 hover:bg-neutral-800 hover:text-neutral-100">
                        <GoogleLogo style={'size-5'} /> Continue com o Google
                    </button>

                    <p className="w-full text-center text-sm text-neutral-400">
                        Não tem uma conta?{' '}
                        <Link to={'/signup'} className="hover:text-neutral-800 hover:underline">
                            Crie uma conta
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginPage
