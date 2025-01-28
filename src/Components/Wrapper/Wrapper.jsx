import React from 'react'

const Wrapper = ({ children, className }) => {
    return <div className={`m-auto flex max-w-screen-2xl px-3 ${className}`}>{children}</div>
}

export default Wrapper
