import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

import { GlobalContext } from '../../Context/GlobalContext'
import CustomInput from '../../Components/CustomForm/CustomInput'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '../../Assets/logo/logo.svg'

const schema = z.object({
    name: z.string(),
    lastName: z.string(),
    password: z.string(),
})

const LoginPage = () => {
    const { theme } = useContext(GlobalContext)

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
        <div className="flex-center h-screen w-full">
            <div className="flex-center h-[45rem] w-[35rem] flex-col rounded-lg bg-white shadow-default">
                <div className="flex-center flex-col">
                    <Link to={'/'} className="flex-center  size-20 cursor-pointer select-none">
                        <img className="size-full select-none object-contain" src={Logo} alt="Site Logo" />
                    </Link>

                    <p>Entre na sua conta</p>
                </div>

                <div>
                    <CustomInput
                        id={'email'}
                        placeholder={'Email'}
                        register={register}
                        errors={errors}
                        style={'rounded-lg'}
                    />

                    <CustomInput
                        id={'password'}
                        placeholder={'Password'}
                        register={register}
                        errors={errors}
                    />

                    <div className="flex items-center gap-2 text-xs">
                        <input type="checkbox" />
                        <p className="[&>span]:underline">
                            Ao criar uma conta, eu concordo com as <span>Políticas de privacidade</span> e os{' '}
                            <span>Termos de uso</span>
                        </p>
                    </div>
                </div>

                <button>Entrar</button>
            </div>
        </div>
    )
}

export default LoginPage
