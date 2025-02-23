import React from 'react'

const CartInfo = ({ icon, title, description }) => {
    return (
        <div className="flex w-fit items-start gap-4 text-neutral-400">
            <div className="size-10 text-neutral-600 [&>svg]:size-full">{icon}</div>

            <div className="flex w-56 flex-col gap-1 text-sm">
                <h1 className="font-bold text-neutral-600">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CartInfo
