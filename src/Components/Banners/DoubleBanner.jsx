import React from 'react'

const DoubleBanner = ({ img1, img2 }) => {
    return (
        <div className="flex justify-between [&>img]:h-60 [&>img]:w-[48%] [&>img]:cursor-pointer [&>img]:rounded-lg">
            <img src={img1} alt="mini banner" />
            <img src={img2} alt="mini banner" />
        </div>
    )
}

export default DoubleBanner
