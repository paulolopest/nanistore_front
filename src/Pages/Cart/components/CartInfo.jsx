import React from 'react'

const CartInfo = ({ icon, title, description }) => {
    return (
        <div className="flex h-40 w-fit items-start gap-4 text-neutral-400 max-640:h-fit">
            <div className="size-10 text-neutral-600 max-640:text-sm [&>svg]:size-full">{icon}</div>

            <div className="flex w-56 flex-col gap-1 text-sm max-640:text-xs">
                <h1 className="font-bold text-neutral-600">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CartInfo
