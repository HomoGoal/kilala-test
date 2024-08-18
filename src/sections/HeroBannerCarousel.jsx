import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import HeroBannerItem from '../components/HeroBannerItem';

const HeroBannerCarousel = ({ bannerList }) => {
  return (
    <section className="hero-banner-carousel">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        {bannerList.map((item) => (
          <SwiperSlide key={item.title}>
            <HeroBannerItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBannerCarousel;
