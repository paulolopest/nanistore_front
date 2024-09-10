import React from 'react'
import Banner1 from '../../Assets/images/banner1.webp'
import BannerBig from '../../Components/Banners/BannerBig'
import { CreditCard, Gavel, Package } from '@phosphor-icons/react'
import Carousel from '../../Components/Carousel/Carousel'

const MainPage = () => {
    return (
        <div className="flex flex-col gap-12 h-[200rem] bg-gray-50">
            <div>
                <BannerBig img={Banner1} footer={true} />
                <footer className="flex w-full h-12 items-center bg-white justify-between px-36 [&>div]:flex [&>div]:items-center [&>div]:gap-2 text-gray-700 text-sm">
                    <div>
                        <CreditCard />
                        <p>Parcelamento em até 10x sem juros</p>
                    </div>
                    <div>
                        <Package />
                        <p>Entrega em todo Brasil</p>
                    </div>
                    <div>
                        <Gavel />
                        <p>Loja autorizada e licenciada</p>
                    </div>
                </footer>
            </div>

            <Carousel title={'Lançamentos'} />
        </div>
    )
}

export default MainPage
