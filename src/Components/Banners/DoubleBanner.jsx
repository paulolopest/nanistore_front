import React from 'react'

const DoubleBanner = () => {
    return (
        <div className="flex px-28 [&>div]:w-[51rem] [&>div]:h-56 [&>div]:bg-neutral-500 [&>div]:rounded-md justify-between">
            <div className=" bg-red-500" />
            <div className="w-10 h-20 bg-green-500" />
        </div>
    )
}

export default DoubleBanner
