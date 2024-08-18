import HeroBannerCarousel from '../sections/HeroBannerCarousel';
import AboutUs from '../sections/AboutUs';
import FeatureWork from '../sections/FeatureWork';
import Reference from '../sections/Reference';
import Blog from '../sections/Blog';

import bannerList from '../data/heroData';
import aboutUsData from '../data/aboutUsData';
import featureWorkData from '../data/featureWorkData';

function Home() {
  return (
    <div>
      {bannerList?.length > 0 && <HeroBannerCarousel bannerList={bannerList} />}

      <AboutUs aboutUsData={aboutUsData} />
      <FeatureWork featureWorkData={featureWorkData} />
      <Reference />
      <Blog />
    </div>
  );
}

export default Home;
