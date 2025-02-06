import React from 'react'

const Wrapper = ({ children, className }) => {
    return <div className={`m-auto flex max-w-screen-2xl max-[1600px]:px-5 ${className}`}>{children}</div>
}

export default Wrapper
