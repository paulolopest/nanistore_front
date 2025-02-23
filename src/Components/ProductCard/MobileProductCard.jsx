import React from 'react'
import { formatPrice } from '../../Utils/Extra'

const MobileProductCard = ({ item }) => {
    return (
        <div className="flexCol flex-center size-[17rem] select-none rounded-xl bg-white p-4 shadow-sm max-640:size-64">
            <img src={item.src[0]} alt="" className="size-44 select-none max-640:size-40" />

            <div className="flex size-full justify-between pt-2">
                <div className="flexCol h-full justify-end gap-1">
                    <p className="text-nowrap font-bold uppercase">{item.name}</p>
                    <p className="text-sm leading-none text-neutral-400 max-640:text-xs max-640:leading-none">
                        {item.type}
                    </p>
                </div>

                <div className="flexCol h-full items-end justify-end">
                    <p className="text-xs leading-none text-neutral-400 line-through">
                        R$ {item.price - 0.01}
                    </p>
                    <p className="text-nowrap font-bold uppercase">
                        R$ {formatPrice(item.price - item.price / 10)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MobileProductCard
