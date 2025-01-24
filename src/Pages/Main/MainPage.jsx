import React from 'react'
import Banner1 from '../../Assets/images/banner1.jpg'
import BannerBig from '../../Components/Banners/BannerBig'
import Carousel from '../../Components/Carousel/Carousel'
import DoubleBanner from '../../Components/Banners/DoubleBanner'
import ComboBanner from '../../Components/Banners/ComboBanner'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Wrapper from '../../Components/Wrapper/Wrapper'

const MainPage = () => {
    return (
        <Wrapper>
            <div className="flex w-full flex-col gap-16 py-40">
                <BannerBig img={Banner1} />

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
