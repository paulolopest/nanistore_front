import React from 'react'

const Wrapper = ({ children, className }) => {
    return <div className={`m-auto flex max-w-screen-2xl max-[1600px]:px-4 ${className}`}>{children}</div>
}

export default Wrapper
