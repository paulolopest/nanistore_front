import React from 'react'
import { formatPrice } from '../../Utils/Extra'

const MobileProductCard = ({ item }) => {
    console.log(item)
    return (
        <div className="flexCol flex-center size-[17rem] select-none rounded-xl bg-white p-4 shadow-md">
            <img src={item.src[0]} alt="" className="size-44 select-none" />

            <div className="flex size-full items-end justify-between">
                <div>
                    <p className="font-bold uppercase">{item.name}</p>
                    <p className="text-sm text-neutral-400">{item.type}</p>
                </div>

                <div className="flexCol items-end">
                    <p className="text-sm text-neutral-400 line-through">R$ {item.price - 0.01}</p>
                    <p className="text-xl font-bold uppercase leading-none tracking-wide">
                        R$ {formatPrice(item.price - item.price / 10)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MobileProductCard
