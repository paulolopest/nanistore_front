import { Link, useRouteError } from 'react-router-dom'
import Logo from './../../Components/IconsComponent/Logo'

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className="flex-center max-580:flexCol h-screen w-full gap-4 text-neutral-600">
            <div className="size-40">
                <Logo />
            </div>

            <div className="flexCol gap-4 max-580:items-center">
                <div className="flex-center w-fit gap-2 text-xl font-bold max-580:text-sm">
                    <p>Error {error.status}</p>
                    <span>-</span>
                    <p>{error.statusText || 500}</p>
                </div>

                <div className="flexCol text-lg max-580:items-center max-580:text-sm">
                    <p>Algo de inesperado aconteceu</p>
                    <Link to={'/'} className="text-blue-500 underline">
                        Retorne a página principal
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
