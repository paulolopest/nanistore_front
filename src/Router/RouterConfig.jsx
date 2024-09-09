import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import ErrorPage from '../Pages/Error/ErrorPage'
import ProductPage from './../Pages/Product/ProductPage'
import MainPage from '../Pages/Main/MainPage'

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
                path: '/products/:productId',
                element: <ProductPage />,
            },
        ],
    },
])

export const RouterConfig = () => {
    return <RouterProvider router={router} />
}
