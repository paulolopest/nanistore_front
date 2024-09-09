import { Outlet } from 'react-router-dom'
import IndexStorage from '../Context/ContextIndex'
import Header from '../Components/Header/Header'

const Root = () => {
    return (
        <IndexStorage>
            <Header />
            <Outlet />
        </IndexStorage>
    )
}

export default Root
