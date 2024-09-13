import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from './../Components/Footer/Footer'
import IndexStorage from '../Context/ContextIndex'

const Root = () => {
    return (
        <IndexStorage>
            <Header />
            <Outlet />
            <Footer/>
        </IndexStorage>
    )
}

export default Root
