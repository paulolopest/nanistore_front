import React from 'react'

const BannerBig = ({ img, ...props }) => {
    return (
        <div {...props} className="h-[32rem] cursor-pointer rounded-xl">
            <img className="size-full rounded-xl object-cover" src={img} alt="Big banner" />
        </div>
    )
}

export default BannerBig
