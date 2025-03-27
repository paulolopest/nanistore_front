import React from 'react'
import Banner1 from '../../Assets/images/banner1.webp'
import Wrapper from '../../Components/Wrapper/Wrapper'
import Carousel from '../../Components/Carousel/Carousel'
import BannerBig from '../../Components/Banners/BannerBig'
import MiniBanner1 from '../../Assets/images/miniBanner1.jpg'
import MiniBanner2 from '../../Assets/images/miniBanner2.png'
import ComboBanner from '../../Components/Banners/ComboBanner'
import DoubleBanner from '../../Components/Banners/DoubleBanner'

const MainPage = () => {
    return (
        <Wrapper>
            <div className="flex w-full flex-col gap-16 py-40 max-[1366px]:py-[8.5rem] max-1024:gap-8 max-844:py-40 max-md:gap-6 max-680:py-20 max-580:py-20">
                <BannerBig img={Banner1} />

                <Carousel title={'Vistos por último'} />

                <DoubleBanner img1={MiniBanner2} img2={MiniBanner1} />

                <Carousel title={'Mais vendidos'} />

                <ComboBanner />

                <Carousel title={'Lançamentos'} />

                <DoubleBanner img1={MiniBanner1} img2={MiniBanner2} />

                <Carousel title={'Dry-fit'} />

                <Carousel title={'Moletons'} />
            </div>
        </Wrapper>
    )
}

export default MainPage
