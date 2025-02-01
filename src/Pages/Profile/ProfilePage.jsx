import { z } from 'zod'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Icon from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import Wrapper from '../../Components/Wrapper/Wrapper'
import CustomInput from '../../Components/CustomForm/CustomInput'
import { items } from '../../Utils/Extra'

const schema = z.object({
    name: z.string(),
    lastName: z.string(),
    password: z.string(),
    newPassword: z.string(),
    email: z.string().email(),
    number: z.string().max(11).min(11),
})

const ProfilePage = () => {
    const [showPassForm, setShowPassForm] = useState(false)
    const [showAddressLayer, setShowAddressLayer] = useState(false)
    const [showHistoryLayer, setShowHistoryLayer] = useState(false)
    const [showOrdersLayer, setShowOrdersLayer] = useState(true)
    const [showOrder, setShowOrder] = useState(false)

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
        <Wrapper className={'pb-[30rem] pt-40'}>
            <div className="flex w-full justify-between gap-8">
                <motion.div layout className="h-fit min-w-[36rem] rounded-lg bg-white shadow-md">
                    <motion.div
                        layout="preserve-aspect"
                        className="flex items-center gap-2 border-x-0 border-b-1 border-t-0 border-solid border-neutral-200 p-4"
                    >
                        <Icon.User className="size-12 rounded-full bg-neutral-200 p-2 text-neutral-700" />

                        <div className="flex flex-col">
                            <p className="text-lg text-neutral-800">Meus dados</p>

                            <p className="text-sm font-light tracking-wide text-neutral-400">
                                Sempre mantenha seus dados verídicos e atualizados
                            </p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-8  p-5">
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
                            style={{ overflow: 'hidden' }}
                            className={`flex w-full flex-col gap-4 overflow-hidden rounded-lg border border-solid border-neutral-200  ${showPassForm && 'border-neutral-600'}`}
                        >
                            <motion.div
                                layout="size"
                                onClick={() => setShowPassForm(!showPassForm)}
                                className="flex size-full cursor-pointer items-center justify-between p-4"
                            >
                                <p
                                    className={`select-none text-neutral-400 ${showPassForm && 'text-neutral-800'}`}
                                >
                                    Alterar senha
                                </p>

                                <Icon.CaretDown
                                    className={`${showPassForm && 'rotate-180'} transition duration-200 ease-in`}
                                />
                            </motion.div>

                            {showPassForm && (
                                <motion.form
                                    id="passwordForm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
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
                                        className="w-full rounded-md bg-neutral-800 p-3 text-neutral-100 hover:bg-neutral-700"
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
                                <p
                                    className={`select-none text-neutral-400 ${showAddressLayer && 'text-neutral-800'}`}
                                >
                                    Endereços
                                </p>

                                <Icon.CaretDown
                                    className={`${showPassForm && 'rotate-180'} transition duration-200 ease-in`}
                                />
                            </motion.div>

                            {showAddressLayer && (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-wrap justify-between gap-y-6 px-4 pb-4"
                                >
                                    <div className="flex w-[48%] flex-col gap-2 rounded-md bg-neutral-100 px-4 py-2 text-sm text-neutral-400">
                                        <p className="text-base text-neutral-600">Casa</p>

                                        <div>
                                            <p>Rua Esmeralda, 421</p>
                                            <p>Lote 32, Quadra 89</p>
                                            <p>CEP: 24211232 - São Bernardo, RJ</p>
                                        </div>

                                        <div className="flex w-full items-center justify-between pt-2 text-neutral-300">
                                            <p className="cursor-pointer hover:text-neutral-700 hover:underline">
                                                Editar
                                            </p>
                                            <p className="cursor-pointer hover:text-red-500 hover:underline">
                                                Remover
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex w-[48%] flex-col gap-2 rounded-md bg-neutral-100 px-4 py-2 text-sm text-neutral-400">
                                        <p className="text-base text-neutral-600">Trabalho</p>

                                        <div>
                                            <p>Rua Esmeralda, 421</p>
                                            <p>Lote 32, Quadra 89</p>
                                            <p>CEP: 24211232 - São Bernardo, RJ</p>
                                        </div>

                                        <div className="flex w-full items-center justify-between pt-2 text-neutral-300">
                                            <p className="cursor-pointer hover:text-neutral-700 hover:underline">
                                                Editar
                                            </p>
                                            <p className="cursor-pointer hover:text-red-500 hover:underline">
                                                Remover
                                            </p>
                                        </div>
                                    </div>

                                    <button className="w-full rounded-md bg-neutral-800 py-3 text-neutral-100 hover:bg-neutral-700">
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
                                className="w-full rounded-md bg-neutral-800 p-3 text-neutral-100 hover:bg-neutral-700"
                            >
                                Atualizar dados
                            </button>

                            <button className="w-full rounded-md border border-solid border-neutral-400 p-3 text-neutral-400 hover:border-red-500 hover:bg-red-500 hover:text-neutral-100">
                                Excluir conta
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="flex w-full flex-col gap-4">
                    <motion.div layout className="h-fit w-full overflow-hidden rounded-md bg-white shadow-md">
                        <motion.div
                            layout
                            onClick={() => setShowOrdersLayer(!showOrdersLayer)}
                            className="flex cursor-pointer items-center justify-between border-x-0 border-b-1 border-t-0 border-solid border-neutral-200 p-4"
                        >
                            <motion.div className="flex items-center gap-2">
                                <Icon.Package className="size-9 rounded-full bg-neutral-200 p-2 text-neutral-700" />

                                <p className="text-neutral-600">Meus pedidos</p>
                            </motion.div>

                            <Icon.CaretUp />
                        </motion.div>

                        {showOrdersLayer && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col gap-4 p-4"
                            >
                                <motion.div layout className="overflow-hidden rounded-md bg-neutral-100">
                                    <motion.div
                                        layout
                                        onClick={() => setShowOrder(!showOrder)}
                                        className="flex h-fit w-full cursor-pointer justify-between  p-4"
                                    >
                                        <div className="flex h-fit gap-12">
                                            <div>
                                                <h1 className="text-base text-neutral-700">
                                                    Pedido realizado
                                                </h1>
                                                <p className="text-sm text-neutral-500">
                                                    1 de fevereiro de 2025
                                                </p>
                                            </div>
                                            <div>
                                                <h1 className="text-base text-neutral-700">Total</h1>
                                                <p className="text-sm text-neutral-500">R$ 259,21</p>
                                            </div>
                                            <div>
                                                <h1 className="text-base text-neutral-700">Enviar para</h1>
                                                <p className="text-sm text-blue-400 underline">Casa</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end justify-between gap-4">
                                            <h1 className="text-sm text-neutral-700">
                                                PEDIDO: 702-9710419-8019454
                                            </h1>

                                            <div className=" size-6 ">
                                                <Icon.CaretUp />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {showOrder && (
                                        <>
                                            <motion.div
                                                transition={{ duration: 0.5 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                layout
                                            >
                                                <div className="w-full border border-x-0 border-b-0 border-solid border-neutral-200 p-4 text-neutral-500">
                                                    <div className="flex w-full items-center justify-between">
                                                        <div className="flex h-20 items-center gap-4">
                                                            <img
                                                                src={items[2].src[0]}
                                                                alt=""
                                                                className="size-14"
                                                            />

                                                            <div className="flex flex-col text-base">
                                                                <p>{items[2].type}</p>
                                                                <p>{items[2].name}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-center gap-2">
                                                            <p>Quantidade</p>
                                                            <p>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full border border-x-0 border-b-0 border-solid border-neutral-200 p-4 text-neutral-500">
                                                    <div className="flex w-full items-center justify-between">
                                                        <div className="flex h-20 items-center gap-4">
                                                            <img
                                                                src={items[3].src[0]}
                                                                alt=""
                                                                className="size-14"
                                                            />

                                                            <div className="flex flex-col text-base">
                                                                <p>{items[3].type}</p>
                                                                <p>{items[3].name}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-center gap-2">
                                                            <p>Quantidade</p>
                                                            <p>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full border border-x-0 border-b-0 border-solid border-neutral-200 p-4 text-neutral-500">
                                                    <div className="flex w-full items-center justify-between">
                                                        <div className="flex h-20 items-center gap-4">
                                                            <img
                                                                src={items[4].src[0]}
                                                                alt=""
                                                                className="size-14"
                                                            />

                                                            <div className="flex flex-col text-base">
                                                                <p>{items[4].type}</p>
                                                                <p>{items[4].name}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-center gap-2">
                                                            <p>Quantidade</p>
                                                            <p>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </>
                                    )}
                                </motion.div>

                                <motion.div layout className="overflow-hidden rounded-md bg-neutral-100">
                                    <motion.div
                                        layout
                                        onClick={() => setShowOrder(!showOrder)}
                                        className="flex h-fit w-full cursor-pointer justify-between  p-4"
                                    >
                                        <div className="flex h-fit gap-12">
                                            <div>
                                                <h1 className="text-base text-neutral-700">
                                                    Pedido realizado
                                                </h1>
                                                <p className="text-sm text-neutral-500">
                                                    1 de fevereiro de 2025
                                                </p>
                                            </div>
                                            <div>
                                                <h1 className="text-base text-neutral-700">Total</h1>
                                                <p className="text-sm text-neutral-500">R$ 259,21</p>
                                            </div>
                                            <div>
                                                <h1 className="text-base text-neutral-700">Enviar para</h1>
                                                <p className="text-sm text-blue-400 underline">Casa</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end justify-between gap-4">
                                            <h1 className="text-sm text-neutral-700">
                                                PEDIDO: 702-9710419-8019454
                                            </h1>

                                            <div className=" size-6 ">
                                                <Icon.CaretUp />
                                            </div>
                                        </div>
                                    </motion.div>

                                    {showOrder && (
                                        <>
                                            <motion.div
                                                transition={{ duration: 0.5 }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                layout
                                            >
                                                <div className="w-full border border-x-0 border-b-0 border-solid border-neutral-200 p-4 text-neutral-500">
                                                    <div className="flex w-full items-center justify-between">
                                                        <div className="flex h-20 items-center gap-4">
                                                            <img
                                                                src={items[2].src[0]}
                                                                alt=""
                                                                className="size-14"
                                                            />

                                                            <div className="flex flex-col text-base">
                                                                <p>{items[2].type}</p>
                                                                <p>{items[2].name}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-center gap-2">
                                                            <p>Quantidade</p>
                                                            <p>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full border border-x-0 border-b-0 border-solid border-neutral-200 p-4 text-neutral-500">
                                                    <div className="flex w-full items-center justify-between">
                                                        <div className="flex h-20 items-center gap-4">
                                                            <img
                                                                src={items[3].src[0]}
                                                                alt=""
                                                                className="size-14"
                                                            />

                                                            <div className="flex flex-col text-base">
                                                                <p>{items[3].type}</p>
                                                                <p>{items[3].name}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-center gap-2">
                                                            <p>Quantidade</p>
                                                            <p>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-full border border-x-0 border-b-0 border-solid border-neutral-200 p-4 text-neutral-500">
                                                    <div className="flex w-full items-center justify-between">
                                                        <div className="flex h-20 items-center gap-4">
                                                            <img
                                                                src={items[4].src[0]}
                                                                alt=""
                                                                className="size-14"
                                                            />

                                                            <div className="flex flex-col text-base">
                                                                <p>{items[4].type}</p>
                                                                <p>{items[4].name}</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-center gap-2">
                                                            <p>Quantidade</p>
                                                            <p>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </>
                                    )}
                                </motion.div>
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div layout className="h-fit w-full rounded-md bg-white shadow-md">
                        <motion.div
                            layout
                            onClick={() => setShowHistoryLayer(!showHistoryLayer)}
                            className="flex items-center justify-between border-x-0 border-b-1 border-t-0 border-solid border-neutral-200 p-4"
                        >
                            <motion.div className="flex items-center gap-2">
                                <Icon.RowsPlusBottom className="size-9 rounded-full bg-neutral-200 p-2 text-neutral-700" />

                                <p className="text-neutral-600">Histórico de compras</p>
                            </motion.div>

                            <Icon.CaretUp />
                        </motion.div>

                        {showHistoryLayer && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4">
                                <div className="flex-center h-20 w-full text-neutral-400">
                                    <p>Nenhum pedido realizado</p>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ProfilePage
