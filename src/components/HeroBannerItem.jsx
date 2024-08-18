import Button from './Button';

const HeroBannerItem = ({ data }) => {
  return (
    <div className="hero-banner-item">
      <img className="hero-banner-item__img" src={data?.img} />
      <div className="hero-banner-item__content">
        <p className="hero-banner-item__title">{data?.title}</p>
        <p className="hero-banner-item__text">{data?.text}</p>
        <Button text="purchase now" />
      </div>
    </div>
  );
};

export default HeroBannerItem;
