const AboutUsItem = ({ data }) => {
  return (
    <div className="about-us-item">
      <div className="about-us-item__img">
        <img src={data?.img} />
      </div>
      <div className="about-us-item__content">
        <p className="about-us-item__title">{data?.title}</p>
        <p className="about-us-item__text">{data?.text}</p>
      </div>
    </div>
  );
};

export default AboutUsItem;
