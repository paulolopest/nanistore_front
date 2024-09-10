import React from 'react'

const BannerBig = ({ img }) => {
    return (
        <div className="w-full h-[30rem]">
            <img className="w-full h-full object-cover" src={img} alt="Big banner" />
        </div>
    )
}

export default BannerBig
