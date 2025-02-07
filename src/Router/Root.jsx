import { useState, useEffect } from 'react'
import Header from '../Components/Header/Header'
import Footer from './../Components/Footer/Footer'
import IndexStorage from '../Context/ContextIndex'
import { Outlet, useLocation } from 'react-router-dom'

const Root = () => {
    const [show, setShow] = useState(true)
    const location = useLocation()

    useEffect(() => {
        const pathsToHideHeader = ['/login', '/signup']
        setShow(!pathsToHideHeader.includes(location.pathname))
    }, [location.pathname])

    return (
        <IndexStorage>
            {show && <Header />}
            <Outlet />
            <Footer />
        </IndexStorage>
    )
}

export default Root
