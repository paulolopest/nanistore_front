import React, { useState } from 'react'
import { items } from '../../Utils/Extra'
import * as Icon from '@phosphor-icons/react'

const CartItem = () => {
    const [quantity, setQuantity] = useState(1)

    const modifyQuantity = (type) => {
        if (type === 'increase') setQuantity(quantity + 1)

        if (type === 'decrease') {
            if (quantity <= 1) {
                return null
            } else setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div className="flex items-center">
                <div className="flex w-4/6 items-center gap-8">
                    <img src={items[2].src[0]} alt="img" className="size-32" />

                    <div className="flex flex-col gap-4">
                        <p className="font-bold uppercase leading-none tracking-wide text-neutral-500">
                            {items[2].type} - {items[2].name}
                        </p>

                        <div className="flex gap-4">
                            <p className="font-bold uppercase leading-none tracking-wide">
                                R$ {items[2].price - 0.11}
                            </p>
                            <p className="font-light tracking-tight text-neutral-400 line-through">
                                R$ {items[2].price + 20.99}
                            </p>
                        </div>

                        <div className="flex w-fit items-center gap-2 bg-neutral-200 px-2 py-1 text-sm uppercase text-neutral-600">
                            <Icon.Tag />
                            <p>2 por {items[1].price * 2 - 10.01} (-R$ 12,99)</p>
                        </div>
                    </div>
                </div>

                <div className="flex h-16 w-1/6 select-none items-center justify-center gap-8 text-lg [&>svg]:cursor-pointer">
                    <Icon.Minus
                        onClick={() => modifyQuantity('decrease')}
                        className="size-6 rounded-full bg-neutral-100 p-1 text-neutral-500 transition ease-in hover:bg-neutral-200 hover:text-neutral-800"
                    />
                    <p>{quantity}</p>
                    <Icon.Plus
                        className="size-6 rounded-full bg-neutral-100 p-1 text-neutral-500 transition ease-in hover:bg-neutral-200 hover:text-neutral-800"
                        onClick={() => modifyQuantity('increase')}
                    />
                </div>

                <div className="flex w-1/6 justify-end">
                    <p>R$ 149,99</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem
