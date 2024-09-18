import React from 'react'
import Banner1 from '../../Assets/images/banner1.webp'
import BannerBig from '../../Components/Banners/BannerBig'
import { CreditCard, Gavel, Package } from '@phosphor-icons/react'
import Carousel from '../../Components/Carousel/Carousel'
import DoubleBanner from '../../Components/Banners/DoubleBanner'
import ComboBanner from '../../Components/Banners/ComboBanner'
import Newsletter from '../../Components/Newsletter/Newsletter'

const MainPage = () => {
    return (
        <div className="flex flex-col gap-16">
            <div>
                <BannerBig img={Banner1} footer={true} />
                <footer className="flex h-12 w-full items-center justify-between bg-neutral-50 px-36 text-sm font-medium uppercase text-gray-700 [&>div]:flex [&>div]:items-center [&>div]:gap-2">
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

            <Carousel title={'Vistos por último'} />

            <DoubleBanner />

            <Carousel title={'Mais vendidos'} />

            <ComboBanner />

            <Carousel title={'Lançamentos'} />

            <Newsletter />
        </div>
    )
}

export default MainPage
