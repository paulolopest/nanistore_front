import React, { useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { items } from '../../../Utils/Extra'

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
        <div className="flex w-full items-center justify-between gap-3 text-neutral-600">
            <div className="flex items-center gap-8 max-1280:gap-4">
                <img
                    src={items[2].src[0]}
                    alt="img"
                    className="size-32 max-640:size-28 max-500:size-24 max-460:size-16 max-380:size-8 max-420:size-12"
                />

                <div className="flex flex-col gap-3">
                    <p className="text-lg font-bold uppercase max-640:text-base max-500:text-sm">
                        {items[2].type} - {items[2].name}
                    </p>

                    <div className="flex gap-4 max-500:text-xs">
                        <p className="font-bold uppercase">R$ {items[2].price - 0.11}</p>
                        <p className="text-neutral-400 line-through">R$ {items[2].price + 20.99}</p>
                    </div>

                    <div className="flex w-fit items-center gap-2 bg-neutral-200 px-2 py-1 text-sm font-light uppercase max-540:text-xs">
                        <Icon.Tag />
                        <p>2 por {items[1].price * 2 - 10.01 - 50.01} (-R$ 10,99)</p>
                    </div>
                </div>
            </div>

            <div className="flex h-full items-center gap-16 max-768:flex-col max-768:gap-5 max-460:gap-3">
                <div className="flex h-16 select-none items-center justify-center gap-8 text-lg text-neutral-400 max-640:text-sm max-540:gap-6 [&>svg]:cursor-pointer">
                    <Icon.Minus
                        onClick={() => modifyQuantity('decrease')}
                        className="size-6 shrink-0 rounded-full bg-neutral-100 p-1 transition ease-in hover:bg-neutral-200 hover:text-neutral-700"
                    />
                    <p>{quantity}</p>
                    <Icon.Plus
                        className="size-6 shrink-0 rounded-full bg-neutral-100 p-1 transition ease-in hover:bg-neutral-200 hover:text-neutral-700"
                        onClick={() => modifyQuantity('increase')}
                    />
                </div>

                <div className="flex justify-end max-768:justify-center ">
                    <p className="text-nowrap text-base leading-none text-neutral-500 max-460:text-sm">
                        R$ 149,99
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItem
