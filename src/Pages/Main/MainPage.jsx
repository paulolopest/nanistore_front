import React from 'react'
import Banner1 from '../../Assets/images/banner1.jpg'
import MiniBanner1 from '../../Assets/images/miniBanner1.jpg'
import MiniBanner2 from '../../Assets/images/miniBanner2.png'
import Wrapper from '../../Components/Wrapper/Wrapper'
import Carousel from '../../Components/Carousel/Carousel'
import BannerBig from '../../Components/Banners/BannerBig'
import ComboBanner from '../../Components/Banners/ComboBanner'
import DoubleBanner from '../../Components/Banners/DoubleBanner'

const MainPage = () => {
    return (
        <Wrapper>
            <div className="flex w-full flex-col gap-16 py-40">
                <BannerBig img={Banner1} />

                <Carousel title={'Vistos por último'} />

                <DoubleBanner img1={MiniBanner1} img2={MiniBanner2} />

                <Carousel title={'Mais vendidos'} />

                <ComboBanner />

                <Carousel title={'Lançamentos'} />

                <Carousel title={'Dry-fit'} />

                {/* <Newsletter /> */}
            </div>
        </Wrapper>
    )
}

export default MainPage
