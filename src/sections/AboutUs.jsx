import { useState } from 'react';

import AboutUsItem from '../components/AboutUsItem';

const AboutUs = ({ aboutUsData }) => {
  const [active, setActive] = useState(0);

  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__title">
          <span></span>
          <p>{aboutUsData?.title}</p>
          <span></span>
        </div>
        <p className="about-us__text">{aboutUsData?.text}</p>

        {aboutUsData?.list?.length > 0 && (
          <div className="about-us__content-wrap">
            <div className="about-us__nav">
              {aboutUsData?.list?.map((x, index) => (
                <button
                  key={x?.title}
                  className={`about-us__nav-item ${
                    active === index && 'active'
                  }`}
                  onClick={() => handleActive(index)}
                >
                  {x?.title}
                </button>
              ))}
            </div>
            <div className="about-us-item-list">
              {aboutUsData?.list?.[active]?.list?.map((item) => (
                <AboutUsItem key={item?.title} data={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUs;
