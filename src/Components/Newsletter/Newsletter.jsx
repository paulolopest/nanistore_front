import { EnvelopeSimple, WhatsappLogo } from '@phosphor-icons/react'
import React, { useState } from 'react'
import CustomInput from '../CustomForm/CustomInput'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [whats, setWhats] = useState('')

    return (
        <div className="px-28 text-white">
            <div className="flex w-full flex-col items-center justify-center gap-10 rounded-xl bg-neutral-800 py-12">
                <div className="flex flex-col items-center justify-center gap-3">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-3xl font-bold">
                            Receba ofertas, promoções exclusivas e fique por dentro dos lançamentos
                        </p>
                    </div>
                    <p>
                        Não se preocupe, seus dados estão seguros, você pode saber mais em nossa{' '}
                        <Link className="underline">política de privacidade</Link>
                    </p>
                </div>

                <div className="flex gap-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
                    <CustomInput
                        w="22rem"
                        h="3rem"
                        icon={<EnvelopeSimple className="size-[1.3rem]" />}
                        state={email}
                        setState={setEmail}
                        label={'Seu melhor email:'}
                    />
                    <CustomInput
                        w="22rem"
                        h="3rem"
                        icon={<WhatsappLogo className="size-[1.3rem]" />}
                        state={whats}
                        setState={setWhats}
                        label={'Seu número de Whatsapp:'}
                    />

                    <motion.button
                        whileTap={{ backgroundColor: '#b91c1c', scale: 0.9 }}
                        className="rounded-md bg-red-500 px-5 py-2 text-white"
                    >
                        Enviar
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
