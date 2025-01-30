import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import CustomInput from '../../Components/CustomForm/CustomInput'
import { motion } from 'framer-motion'

const schema = z.object({
    email: z.string().email(),
    name: z.string(),
    lastName: z.string(),
    number: z.string().max(11).min(11),
    password: z.string(),
    newPassword: z.string(),
})

const ProfilePage = () => {
    const [showPassForm, setShowPassForm] = useState(true)

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
        <Wrapper className={'pb-[30rem] pt-32'}>
            <div className="w-full">
                <motion.div layout className="h-full w-[45%] rounded-md bg-white shadow-md">
                    <motion.div
                        layout
                        className="flex items-center gap-2 border-x-0 border-b-1 border-t-0 border-solid border-neutral-200 p-4"
                    >
                        <Icon.User className="size-12 rounded-full bg-neutral-200 p-2" />

                        <div className="flex flex-col gap-1">
                            <p className="text-lg leading-none">Meus dados</p>
                            <p className="text-xs text-neutral-400">
                                Sempre mantenha seus dados verídicos e atualizados
                            </p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-12 p-5">
                        <form
                            id="basicForm"
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-wrap justify-between gap-y-8"
                        >
                            <CustomInput
                                register={register}
                                errors={errors}
                                id={'name'}
                                placeholder={'Nome'}
                            />
                            <CustomInput
                                register={register}
                                errors={errors}
                                id={'number'}
                                placeholder={'Telefone'}
                                type={'number'}
                            />
                            <CustomInput
                                register={register}
                                errors={errors}
                                id={'lastName'}
                                placeholder={'Sobrenome'}
                            />
                            <CustomInput
                                register={register}
                                errors={errors}
                                id={'email'}
                                placeholder={'Email'}
                            />
                        </form>

                        <motion.div
                            layout
                            className={`flex w-full flex-col gap-4 border border-solid border-neutral-200 p-4 ${showPassForm && 'border-neutral-600'}`}
                        >
                            <motion.div
                                layout
                                onClick={() => setShowPassForm(!showPassForm)}
                                className="flex cursor-pointer items-center justify-between"
                            >
                                <p
                                    className={`select-none text-neutral-400 ${showPassForm && 'text-neutral-800'}`}
                                >
                                    Alterar senha
                                </p>
                                <Icon.CaretUp />
                            </motion.div>

                            {showPassForm && (
                                <form
                                    id="passwordForm"
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="flex w-full flex-col justify-between gap-8"
                                >
                                    <motion.div layout className="flex w-full justify-between">
                                        <CustomInput
                                            register={register}
                                            errors={errors}
                                            id={'password'}
                                            placeholder={'Senha atual'}
                                        />
                                        <CustomInput
                                            register={register}
                                            errors={errors}
                                            id={'newPassword'}
                                            placeholder={'Confirmar nova senha'}
                                        />
                                    </motion.div>

                                    <button
                                        form="passwordForm"
                                        type="form"
                                        className="w-full bg-neutral-800 p-3 text-neutral-100"
                                    >
                                        Confirmar
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        <div className="flex flex-col gap-4 justify-self-end">
                            <button
                                disabled={isSubmitting}
                                form="basicForm"
                                type="submit"
                                className="w-full rounded-sm bg-neutral-800 p-3 text-neutral-100 hover:bg-neutral-700"
                            >
                                Alterar Dados
                            </button>

                            <button className="w-full rounded-sm border border-solid border-neutral-400 p-3 text-neutral-400 hover:border-red-500 hover:bg-red-500 hover:text-neutral-100">
                                Solicitar remoção de dados
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Wrapper>
    )
}

export default ProfilePage
