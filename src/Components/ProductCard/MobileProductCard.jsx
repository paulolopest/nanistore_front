import React from 'react'
import { formatPrice } from '../../Utils/Extra'

const MobileProductCard = ({ item, style }) => {
    return (
        <div
            className={`flexCol flex-center size-[17rem] select-none gap-2 rounded-xl bg-white p-4 shadow-sm ${style} max-500:size-60`}
        >
            <img src={item.src[0]} alt="" className="size-full select-none object-contain object-center" />

            <div className="flex w-full justify-between pt-2">
                <div className="flexCol h-full justify-end gap-1 max-500:gap-0.5">
                    <p className="text-nowrap font-bold uppercase max-500:text-sm">{item.name}</p>
                    <p className="text-sm leading-none text-neutral-400 max-640:text-xs max-640:leading-none">
                        {item.type}
                    </p>
                </div>

                <div className="flexCol h-full items-end justify-end">
                    <p className="text-xs leading-none text-neutral-400 line-through">
                        R$ {item.price - 0.01}
                    </p>
                    <p className="text-nowrap font-bold uppercase max-500:text-sm">
                        R$ {formatPrice(item.price - item.price / 10)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MobileProductCard
