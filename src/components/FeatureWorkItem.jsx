const FeatureWorkItem = ({ data }) => {
  return (
    <div className="feature-work-main-item">
      <img className="feature-work-main-item__img" src={data?.img} alt="icon"/>
      <div className="feature-work-main-item__content">
        <p className="feature-work-main-item__title">{data?.title}</p>
        <p className="feature-work-main-item__text">{data?.text}</p>
      </div>
    </div>
  );
};

export default FeatureWorkItem;
