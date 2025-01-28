import React from 'react'

const CartInfo = ({ icon, title, description }) => {
    return (
        <div className="flex w-fit items-start gap-4 text-neutral-400">
            <div className="size-10 text-neutral-700 [&>svg]:size-full">{icon}</div>

            <div className="flex w-56 flex-col gap-2 text-sm">
                <h1 className="font-bold leading-none text-neutral-700">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CartInfo
