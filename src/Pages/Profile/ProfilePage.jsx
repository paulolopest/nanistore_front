import { z } from 'zod'
import { useForm } from 'react-hook-form'
import OrderCtr from './Components/OrderCtr'
import * as Icon from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'
import AddressModal from './Components/AddressModal'
import { zodResolver } from '@hookform/resolvers/zod'
import Wrapper from '../../Components/Wrapper/Wrapper'
import CustomInput from '../../Components/CustomForm/CustomInput'

const schema = z.object({
    name: z.string(),
    lastName: z.string(),
    password: z.string(),
    newPassword: z.string(),
    email: z.string().email({ message: 'E-mail inválido' }),
    number: z.string().max(11, { message: 'Número inválido' }).min(11, { message: 'Número inválido' }),
})

const ProfilePage = () => {
    const [scope, animate] = useAnimate()
    const [addressModal, setAddressModal] = useState(false)
    const [showPassForm, setShowPassForm] = useState(false)
    const [showOrdersLayer, setShowOrdersLayer] = useState(true)
    const [showAddressLayer, setShowAddressLayer] = useState(false)
    const [showHistoryLayer, setShowHistoryLayer] = useState(false)

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
        await animate('#userInfoSection', { opacity: 1, y: 0 }, { duration: 0.1, ease: 'easeInOut' })
        await animate('#userOrder', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
        animate('#userHistory', { opacity: 1, y: 0 }, { duration: 0.15, ease: 'easeInOut' })
    }

    useEffect(() => {
        handleAnimate()
    }, [])

    return (
        <>
            <Wrapper className={'pb-[30rem] pt-40'}>
                <motion.div ref={scope} className="flex w-full justify-between gap-8 text-neutral-600">
                    <motion.div
                        layout
                        id="userInfoSection"
                        initial={{ opacity: 0, y: 20 }}
                        className="h-fit min-w-[36rem] rounded-xl bg-white shadow-md"
                    >
                        <motion.div
                            layout="preserve-aspect"
                            className="flex items-center gap-2 border-x-0 border-b-1 border-t-0 border-solid border-neutral-200 p-4"
                        >
                            <Icon.User className="size-12 rounded-full bg-neutral-200 p-2" />

                            <div className="flex flex-col">
                                <p className="text-lg">Meus dados</p>

                                <p className="text-xs text-neutral-400">
                                    Sempre mantenha seus dados verídicos e atualizados
                                </p>
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-8 p-5">
                            <form
                                id="basicForm"
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-wrap justify-between gap-y-6 pb-4"
                            >
                                <CustomInput
                                    register={register}
                                    errors={errors}
                                    id={'name'}
                                    placeholder={'Nome'}
                                    w="48%"
                                    h="3rem"
                                />
                                <CustomInput
                                    register={register}
                                    errors={errors}
                                    id={'number'}
                                    placeholder={'Telefone'}
                                    type={'number'}
                                    w="48%"
                                    h="3rem"
                                />
                                <CustomInput
                                    register={register}
                                    errors={errors}
                                    id={'lastName'}
                                    placeholder={'Sobrenome'}
                                    w="48%"
                                    h="3rem"
                                />
                                <CustomInput
                                    register={register}
                                    errors={errors}
                                    id={'email'}
                                    placeholder={'E-mail'}
                                    w="48%"
                                    h="3rem"
                                />
                            </form>

                            <motion.div
                                layout
                                style={{ overflow: 'hidden' }}
                                className={`flex w-full flex-col gap-4 overflow-hidden rounded-lg border border-solid border-neutral-200  ${showPassForm && 'border-neutral-600'}`}
                            >
                                <motion.div
                                    layout="size"
                                    onClick={() => setShowPassForm(!showPassForm)}
                                    className="flex size-full cursor-pointer items-center justify-between p-4"
                                >
                                    <p className={`select-none  ${!showPassForm && 'text-neutral-400'}`}>
                                        Alterar senha
                                    </p>

                                    <Icon.CaretDown
                                        className={`${showPassForm && 'rotate-180'} transition duration-200 ease-in`}
                                    />
                                </motion.div>

                                {showPassForm && (
                                    <motion.form
                                        id="passwordForm"
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="flex w-full flex-col justify-between gap-8 px-4 pb-4"
                                    >
                                        <motion.div layout className="flex w-full justify-between">
                                            <CustomInput
                                                register={register}
                                                errors={errors}
                                                id={'password'}
                                                placeholder={'Senha atual'}
                                                w="48%"
                                                h="3rem"
                                            />
                                            <CustomInput
                                                register={register}
                                                errors={errors}
                                                id={'newPassword'}
                                                placeholder={'Confirmar nova senha'}
                                                w="48%"
                                                h="3rem"
                                            />
                                        </motion.div>

                                        <button
                                            form="passwordForm"
                                            type="form"
                                            className="w-full rounded-lg bg-neutral-800 p-3 text-neutral-100 hover:bg-neutral-700"
                                        >
                                            Confirmar
                                        </button>
                                    </motion.form>
                                )}
                            </motion.div>

                            <motion.span
                                layout="preserve-aspect"
                                className="border-b border-solid border-neutral-100"
                            />

                            <motion.div
                                layout
                                className={`flex flex-col gap-8 rounded-lg border border-solid border-neutral-200 ${showAddressLayer && 'border-neutral-800'} overflow-hidden`}
                            >
                                <motion.div
                                    layout
                                    onClick={() => setShowAddressLayer(!showAddressLayer)}
                                    className="flex size-full cursor-pointer items-center justify-between p-4"
                                >
                                    <p className={`select-none  ${!showAddressLayer && 'text-neutral-400'}`}>
                                        Endereços
                                    </p>

                                    <Icon.CaretDown
                                        className={`${showAddressLayer && 'rotate-180'} transition duration-200 ease-in`}
                                    />
                                </motion.div>

                                {showAddressLayer && (
                                    <motion.div
                                        layout
                                        className="flex flex-wrap justify-between gap-y-6 px-4 pb-4"
                                    >
                                        <div className="flex w-[48%] flex-col gap-2 rounded-xl bg-neutral-100 px-4 py-2 text-sm text-neutral-400">
                                            <p className="text-base">Casa</p>

                                            <div>
                                                <p>Rua Esmeralda, 421</p>
                                                <p>Lote 32, Quadra 89</p>
                                                <p>CEP: 24211232 - São Bernardo, RJ</p>
                                            </div>

                                            <div className="flex w-full items-center justify-between pt-2 text-neutral-300">
                                                <p className="cursor-pointer hover:text-neutral-600 hover:underline">
                                                    Editar
                                                </p>
                                                <p className="cursor-pointer hover:text-red-500 hover:underline">
                                                    Remover
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex w-[48%] flex-col gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm text-neutral-400">
                                            <p className="text-base text-neutral-600">Trabalho</p>

                                            <div>
                                                <p>Rua Esmeralda, 421</p>
                                                <p>Lote 32, Quadra 89</p>
                                                <p>CEP: 24211232 - São Bernardo, RJ</p>
                                            </div>

                                            <div className="flex w-full items-center justify-between pt-2 text-neutral-300">
                                                <p className="cursor-pointer hover:text-neutral-600 hover:underline">
                                                    Editar
                                                </p>
                                                <p className="cursor-pointer hover:text-red-500 hover:underline">
                                                    Remover
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setAddressModal(true)}
                                            className="w-full rounded-lg bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-700"
                                        >
                                            Adicionar endereço
                                        </button>
                                    </motion.div>
                                )}
                            </motion.div>

                            <div className="flex flex-col gap-4 justify-self-end">
                                <button
                                    disabled={isSubmitting}
                                    form="basicForm"
                                    type="submit"
                                    className="transitionIn w-full rounded-lg border border-solid border-neutral-800 bg-neutral-800 p-3 text-neutral-100 hover:bg-neutral-700"
                                >
                                    Atualizar dados
                                </button>

                                <button className="transitionIn w-full rounded-lg border border-solid border-neutral-400 p-3 text-neutral-400 hover:border-red-500 hover:bg-red-500 hover:text-neutral-100">
                                    Excluir conta
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="flex w-full flex-col gap-4 overflow-hidden">
                        <motion.div
                            layout
                            id="userOrder"
                            initial={{ opacity: 0, y: 20 }}
                            className="h-fit w-full overflow-hidden rounded-xl bg-white shadow-sm"
                        >
                            <motion.div
                                layout="preserve-aspect"
                                onClick={() => setShowOrdersLayer(!showOrdersLayer)}
                                className="flex cursor-pointer items-center justify-between border-x-0 border-b-1 border-t-0 border-solid border-neutral-200 p-4"
                            >
                                <motion.div className="flex items-center gap-2">
                                    <Icon.Package className="size-9 rounded-full bg-neutral-200 p-2 text-neutral-600" />

                                    <p className="select-none text-neutral-600">Meus pedidos</p>
                                </motion.div>

                                <Icon.CaretDown
                                    className={`transition ease-in ${showOrdersLayer && 'rotate-180'}`}
                                />
                            </motion.div>

                            {showOrdersLayer && (
                                <motion.div layout className="flex flex-col gap-4 p-4">
                                    <OrderCtr />
                                    <OrderCtr />
                                </motion.div>
                            )}
                        </motion.div>

                        <motion.div
                            layout
                            id="userHistory"
                            initial={{ opacity: 0, y: 20 }}
                            className="h-fit w-full overflow-hidden rounded-xl bg-white shadow-sm"
                        >
                            <motion.div
                                layout
                                onClick={() => setShowHistoryLayer(!showHistoryLayer)}
                                className="flex cursor-pointer items-center justify-between border-x-0 border-b-1 border-t-0 border-solid border-neutral-200 p-4"
                            >
                                <motion.div className="flex items-center gap-2">
                                    <Icon.RowsPlusBottom className="size-9 rounded-full bg-neutral-200 p-2 text-neutral-600" />

                                    <p className="select-none text-neutral-600">Histórico de compras</p>
                                </motion.div>

                                <Icon.CaretDown
                                    className={`transition ease-in ${showHistoryLayer && 'rotate-180'}`}
                                />
                            </motion.div>

                            {showHistoryLayer && (
                                <motion.div layout className="p-4">
                                    <div className="flex-center h-20 w-full text-neutral-400">
                                        <p>Nenhum pedido realizado</p>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Wrapper>

            {addressModal && <AddressModal setState={setAddressModal} />}
        </>
    )
}

export default ProfilePage
