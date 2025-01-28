import Root from './Root'
import MainPage from '../Pages/Main/MainPage'
import ErrorPage from '../Pages/Error/ErrorPage'
import SearchPage from '../Pages/Search/SearchPage'
import ProductPage from './../Pages/Product/ProductPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CartPage from '../Pages/Cart/CartPage'

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
