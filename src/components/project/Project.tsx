import React from "react";
import { useStyles } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import visit from "../../images/footer/siteVisitHover.svg";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

type PropsType = {
  images: any[];
  title: string;
  link: string;
};

const Project: React.FC<PropsType> = ({ title, images, link, children }) => {
  const classes = useStyles();

  const settings = {
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.sliderWrapper}>
        <a className={classes.sliderLink} href={link} target="_blank">
          <Slider {...settings} className={classes.img}>
            {images.map((img, i) => (
              <img key={i} src={img} alt="work image" />
            ))}
          </Slider>
          <AspectRatioIcon className={classes.sliderIcon} />
        </a>
      </div>
      <div className={classes.description}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.text}>{children}</p>
      </div>
    </div>
  );
};

export default Project;
