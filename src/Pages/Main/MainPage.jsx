import React from 'react'
import Banner1 from '../../Assets/images/banner1.webp'
import BannerBig from '../../Components/Banners/BannerBig'
// import { CreditCard, Gavel, Package } from '@phosphor-icons/react'
import Carousel from '../../Components/Carousel/Carousel'
import DoubleBanner from '../../Components/Banners/DoubleBanner'
import ComboBanner from '../../Components/Banners/ComboBanner'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Wrapper from '../../Components/Wrapper/Wrapper'

const MainPage = () => {
    return (
        <Wrapper>
            <div className="flex w-full flex-col gap-16 py-28">
                <div className="mt-10 rounded-xl ">
                    <BannerBig img={Banner1} />
                    {/* <footer className="flex h-12 w-full items-center justify-between rounded-b-xl bg-white px-10 text-[.7rem] font-normal uppercase tracking-widest text-neutral-700 shadow-[0_2px_8px_rgba(0,0,0,0.1)] [&>div]:flex [&>div]:items-center [&>div]:gap-2">
                    <div>
                        <CreditCard size={'1rem'} />
                        <p>Parcelamento em até 10x sem juros</p>
                    </div>
                    <div>
                        <Package size={'1rem'} />
                        <p>Entrega em todo Brasil</p>
                    </div>
                    <div>
                        <Gavel size={'1rem'} />
                        <p>Loja autorizada e licenciada</p>
                    </div>
                </footer> */}
                </div>

                <Carousel title={'Vistos por último'} />

                <DoubleBanner />

                <Carousel title={'Mais vendidos'} />

                <ComboBanner />

                <Carousel title={'Lançamentos'} />

                <Newsletter />
            </div>
        </Wrapper>
    )
}

export default MainPage
