import { z } from 'zod'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as Icon from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../../Components/IconsComponent/Logo'
import GoogleLogo from '../../Components/IconsComponent/GoogleLogo'
import CustomInput from './../../Components/CustomForm/CustomInput'

const schema = z.object({
    emailSignup: z.string().email(),
    passwordSignup: z.string(),
    confirmPasswordSignup: z.string(),
})

const SignupPage = () => {
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

    return (
        <div className="flex-center flexCol h-screen w-full">
            <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="flex-center w-[35rem] flex-col gap-8 rounded-xl bg-white py-10 shadow-lg"
            >
                <div className="flex-center flexCol gap-4">
                    <Link to={'/'} className="flex-center size-32 cursor-pointer select-none">
                        <Logo />
                    </Link>

                    <div className="flexCol flex-center">
                        <p className="text-2xl font-bold tracking-wide text-neutral-600">Cadastre</p>
                        <p className="text-sm leading-none text-neutral-400">Para fazer compras no site</p>
                    </div>
                </div>

                <form id="signupForm" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <CustomInput
                        id={'emailSignup'}
                        placeholder={'E-mail'}
                        register={register}
                        errors={errors}
                        style={'rounded-lg'}
                        h={'3rem'}
                        w={'25rem'}
                        icon={<Icon.Envelope />}
                    />

                    <CustomInput
                        id={'passwordSignup'}
                        placeholder={'Senha'}
                        register={register}
                        errors={errors}
                        h={'3rem'}
                        w={'25rem'}
                    />

                    <CustomInput
                        id={'confirmPasswordSignup'}
                        placeholder={'Confirme a senha'}
                        register={register}
                        errors={errors}
                        h={'3rem'}
                        w={'25rem'}
                    />
                </form>

                <button
                    type="submit"
                    form="signupForm"
                    className="transitionIn w-[25rem] rounded-md bg-neutral-800 py-4 text-lg leading-none text-neutral-100 hover:bg-neutral-700"
                >
                    Cadastrar
                </button>

                <div className="relative my-4 h-tiny w-[25rem] bg-neutral-200">
                    <p className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-neutral-400">
                        Ou
                    </p>
                </div>

                <div className="flexCol gap-6">
                    <button className="transitionIn flex-center w-[25rem] gap-2 rounded-md border border-solid border-neutral-200 py-4 text-neutral-400 hover:border-neutral-800 hover:bg-neutral-800 hover:text-neutral-100">
                        <GoogleLogo style={'size-5'} /> Cadastre com o Google
                    </button>

                    <p className="w-full text-center text-sm text-neutral-400">
                        Ja tem uma conta?{' '}
                        <Link to={'/login'} className="hover:text-neutral-800 hover:underline">
                            Entre na sua conta
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default SignupPage
