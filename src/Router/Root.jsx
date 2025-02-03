import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from './../Components/Footer/Footer'
import IndexStorage from '../Context/ContextIndex'

const Root = () => {
    const location = useLocation()
    const isLoginPage = location.pathname === '/login'

    return (
        <IndexStorage>
            {!isLoginPage && <Header />}
            <Outlet />
            <Footer />
        </IndexStorage>
    )
}

export default Root
