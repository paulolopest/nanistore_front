import { EnvelopeSimple, WhatsappLogo } from '@phosphor-icons/react'
import React, { useState } from 'react'
import CustomInput from '../CustomForm/CustomInput'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [whats, setWhats] = useState('')

    return (
        <div className="px-28">
            <div className="py-12 rounded-xl w-full bg-neutral-200 flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col gap-3 items-center justify-center">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="text-3xl font-bold">
                            Receba ofertas e promoções exclusivas e fique por dentro dos lançamentos
                        </p>
                    </div>
                    <p>
                        Não se preocupe, não compartilhamos seus dados, você pode saber mais em nossa{' '}
                        <Link className="underline">política de privacidade</Link>
                    </p>
                </div>

                <div className="flex gap-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1">
                    <CustomInput
                        w="22rem"
                        h="3rem"
                        icon={<EnvelopeSimple className="w-[1.3rem] h-[1.3rem]" />}
                        state={email}
                        setState={setEmail}
                        label={'Seu melhor email:'}
                    />
                    <CustomInput
                        w="22rem"
                        h="3rem"
                        icon={<WhatsappLogo className="w-[1.3rem] h-[1.3rem]" />}
                        state={whats}
                        setState={setWhats}
                        label={'Seu número de Whatsapp:'}
                    />

                    <motion.button
                        whileTap={{ backgroundColor: '#b91c1c', scale: 0.9 }}
                        className="px-5 py-2 bg-red-500 text-neutral-50 rounded-md"
                    >
                        Enviar
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
