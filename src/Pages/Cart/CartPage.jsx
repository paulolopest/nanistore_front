import React from 'react'
import { motion } from 'framer-motion'
import CartItem from './components/CartItem'
import CartInfo from './components/CartInfo'
import * as Icon from '@phosphor-icons/react'
import Wrapper from './../../Components/Wrapper/Wrapper'
import Carousel from './../../Components/Carousel/Carousel'

const CartPage = () => {
    return (
        <Wrapper className={'flex flex-col gap-14 py-40'}>
            <div className="flex w-full flex-col gap-4 text-neutral-600">
                <h1 className="text-2xl font-bold leading-none">Meu carrinho</h1>

                <section className="flex w-full justify-between">
                    <motion.div
                        layoutId="cartPage"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="flex max-h-[43rem] w-[64rem] flex-col gap-8 overflow-y-scroll rounded-lg bg-white px-8 py-4 shadow-default"
                    >
                        <div className="flex w-full justify-between text-neutral-400 [&>p]:h-6">
                            <p className="w-4/6">Produto</p>
                            <p className="w-1/6 text-center">Quantidade</p>
                            <p className="w-1/6 text-end">Total</p>
                        </div>

                        <CartItem />
                    </motion.div>

                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex h-[30rem] w-[28rem] flex-col justify-between rounded-lg bg-white p-8 shadow-default"
                    >
                        <div className="flex flex-col gap-8">
                            <p className="text-xl font-bold uppercase  ">Resumo</p>

                            <div className="flex flex-col gap-4">
                                <div className="flex w-full items-center justify-between border border-x-0 border-t-0 border-solid border-b-neutral-100 pb-5">
                                    <p>Valor dos produtos</p>
                                    <p>R$ 219,99</p>
                                </div>

                                <div className="flex w-full items-center justify-between border border-x-0 border-t-0 border-solid border-b-neutral-100 pb-5">
                                    <p>Descontos e cupons</p>
                                    <p>R$ 70,00</p>
                                </div>

                                <p className="w-fit bg-neutral-200 p-1 text-sm uppercase">
                                    pix/cartão recebe 3 dias antes
                                </p>

                                <div className="flex w-full items-center justify-between border border-x-0 border-t-0 border-solid border-b-neutral-100 pb-5">
                                    <p>Total</p>
                                    <p className="text-xl font-extrabold text-green-500">R$ 149,99</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <motion.button
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="h-16 w-full rounded-md bg-neutral-800 text-center font-semibold  uppercase text-neutral-100 hover:bg-neutral-700"
                            >
                                Finalizar Compra
                            </motion.button>

                            <motion.button
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="h-16 w-full rounded-md border border-neutral-400 text-center font-semibold  uppercase text-neutral-400 hover:border-neutral-600 hover:text-neutral-600"
                            >
                                Continuar comprando
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </div>

            <Carousel title={'Visto recentemente'} />

            <section className="flex items-start justify-between pt-10">
                <CartInfo
                    icon={<Icon.CreditCard />}
                    title={'Compra segura'}
                    description={
                        'Utilizamos a mesma segurança de dados dos maiores bancos nacionais e internacionais (SSL)'
                    }
                />
                <CartInfo
                    icon={<Icon.ShoppingCart />}
                    title={'Satisfação ou Reembolso'}
                    description={'Caso de defeitos, devolvemos seu dinheiro com velocidade'}
                />
                <CartInfo
                    icon={<Icon.Question />}
                    title={'Suporte Profissional'}
                    description={'Equipe de suporte de extrema qualidade a semana toda'}
                />
                <CartInfo
                    icon={<Icon.Package />}
                    title={'Frete Grátis + Entrega Garantida'}
                    description={
                        'Todas as nossas entregas possuem código de rastreio e você recebe todas as atualizações em seu e-mail e WhatsApp'
                    }
                />
            </section>
        </Wrapper>
    )
}

export default CartPage
