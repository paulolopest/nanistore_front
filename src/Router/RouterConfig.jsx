import Root from './Root'
import MainPage from '../Pages/Main/MainPage'
import CartPage from '../Pages/Cart/CartPage'
import ErrorPage from '../Pages/Error/ErrorPage'
import LoginPage from '../Pages/Auth/LoginPage'
import SearchPage from '../Pages/Search/SearchPage'
import ProfilePage from './../Pages/Profile/ProfilePage'
import ProductPage from './../Pages/Product/ProductPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignupPage from './../Pages/Auth/SignupPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/product/:productId/:productName',
                element: <ProductPage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/signup',
                element: <SignupPage />,
            },
            {
                path: '/search',
                element: <SearchPage />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
        ],
    },
])

export const RouterConfig = () => {
    return <RouterProvider router={router} />
}
