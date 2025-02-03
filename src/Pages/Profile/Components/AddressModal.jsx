import { z } from 'zod'
import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import * as Icon from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import CustomInput from '../../../Components/CustomForm/CustomInput'

const schema = z.object({
    city: z.string().nonempty(),
    state: z.string().nonempty(),
    street: z.string().nonempty(),
    zipCode: z.string().nonempty(),
    nickname: z.string().nonempty(),
    reference: z.string().nonempty(),
    neighborhood: z.string().nonempty(),
    addressNumber: z.string().nonempty(),
})

const AddressModal = ({ setState }) => {
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
        <div className="absolute left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black/30 backdrop-blur-md">
            <motion.div
                layout
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flexCol relative w-[40rem] items-center gap-8 rounded-lg bg-white p-8 shadow-md"
            >
                <h1 className="text-xl font-bold leading-none text-neutral-600">Adicionar endereço</h1>

                <motion.form
                    layout
                    onSubmit={handleSubmit(onSubmit)}
                    id="addressForm"
                    className="grid w-full grid-cols-2 gap-4"
                >
                    <CustomInput
                        register={register}
                        errors={errors}
                        id={'nickname'}
                        placeholder={'Identificação'}
                        w="100%"
                        h="3rem"
                    />
                    <CustomInput
                        register={register}
                        errors={errors}
                        id={'zipCode'}
                        placeholder={'CEP'}
                        w="100%"
                        h="3rem"
                    />
                    <CustomInput
                        register={register}
                        errors={errors}
                        id={'street'}
                        placeholder={'Logradouro'}
                        w="100%"
                        h="3rem"
                    />
                    <CustomInput
                        register={register}
                        errors={errors}
                        id={'addressNumber'}
                        placeholder={'Número'}
                        w="100%"
                        h="3rem"
                    />
                    <CustomInput
                        register={register}
                        errors={errors}
                        id={'neighborhood'}
                        placeholder={'Bairro'}
                        w="100%"
                        h="3rem"
                    />
                    <CustomInput
                        register={register}
                        errors={errors}
                        id={'city'}
                        placeholder={'Cidade'}
                        w="100%"
                        h="3rem"
                    />
                    <CustomInput
                        register={register}
                        errors={errors}
                        id={'state'}
                        placeholder={'Estado'}
                        w="100%"
                        h="3rem"
                    />
                    <CustomInput
                        register={register}
                        errors={errors}
                        id={'reference'}
                        placeholder={'Referencia'}
                        w="100%"
                        h="3rem"
                    />
                </motion.form>

                <button
                    type="submit"
                    form="addressForm"
                    onClick={() => setState(false)}
                    className="w-full rounded-md bg-neutral-800 py-4 text-neutral-100 hover:bg-neutral-700"
                >
                    Cadastrar endereço
                </button>

                <div
                    onClick={() => setState(false)}
                    className="absolute -top-10 right-0 size-8 cursor-pointer rounded-full p-1 hover:bg-neutral-200"
                >
                    <Icon.X className="size-full" />
                </div>
            </motion.div>
        </div>
    )
}

export default AddressModal
