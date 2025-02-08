import React from 'react'
import { formatPrice } from '../../Utils/Extra'

const MobileProductCard = ({ item }) => {
    return (
        <div className="flexCol flex-center size-[17rem] select-none rounded-xl bg-white p-4 shadow-sm max-640:size-60">
            <img src={item.src[0]} alt="" className="size-44 select-none max-640:size-40" />

            <div className="flex size-full items-end justify-between">
                <div className="flexCol justify-end gap-1">
                    <p className="font-bold uppercase">{item.name}</p>
                    <p className="text-sm text-neutral-400 max-640:text-xs max-640:leading-none">
                        {item.type}
                    </p>
                </div>

                <div className="flexCol items-end">
                    <p className="text-sm  leading-none text-neutral-400 line-through max-640:text-xs max-640:leading-none">
                        R$ {item.price - 0.01}
                    </p>
                    <p className="text-xl font-bold uppercase tracking-wide max-640:text-base max-640:leading-none">
                        R$ {formatPrice(item.price - item.price / 10)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MobileProductCard
