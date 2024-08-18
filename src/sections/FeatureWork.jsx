import FeatureWorkItem from '../components/FeatureWorkItem';

import featureWorkIcon from '../assets/svg/featureWorkIcon.svg';
import featureWorkBg from '../assets/svg/featureWorkBg.svg';

const FeatureWork = ({ featureWorkData }) => {
  return (
    <section className="feature-work">
      <div className="feature-work-main">
        <div className="feature-work-main__container">
          <img
            className="feature-work-main__img"
            src={featureWorkBg}
            alt="feature work background"
          />
          <div className="feature-work-main__content">
            <p className="feature-work-main__title">{featureWorkData?.title}</p>
            <p className="feature-work-main__subtitle">
              {featureWorkData?.subtitle}
            </p>
            <p className="feature-work-main__text">{featureWorkData?.text}</p>
            <p className="feature-work-main__subtext">
              {featureWorkData?.subtext}
            </p>
            {featureWorkData?.list?.length > 0 && (
              <div className="feature-work-main__list">
                {featureWorkData?.list?.map((item) => (
                  <FeatureWorkItem key={item.title} data={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="feature-work-sub">
        <img src={featureWorkIcon} />
        <p className="feature-work-sub__content">check all recent works</p>
      </div>
    </section>
  );
};

export default FeatureWork;
