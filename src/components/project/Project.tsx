import React, { useEffect, useRef } from "react";
import { useStyles } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import github_icon from "../../assets/images/footer/github_hover.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlankLink from "../menu/BlankLink/BlankLink";

type PropsType = {
  images: any[];
  title: string;
  link: string;
  github?: string;
};

const Project: React.FC<PropsType> = ({
  title,
  images,
  link,
  github,
  children,
}) => {
  const classes = useStyles();

  const elem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(elem.current, {
      scrollTrigger: elem.current,
      y: "40px",
      opacity: 0,
      duration: 1.2,
    });
  }, []);

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
    <div ref={elem} className={classes.wrapper}>
      <div className={classes.sliderWrapper}>
        <BlankLink className={classes.sliderLink} href={link}>
          <Slider {...settings} className={classes.slider}>
            {images.map((img, i) => (
              <img key={i} src={img} alt="work image" />
            ))}
          </Slider>
        </BlankLink>
      </div>
      <div className={classes.description}>
        <AspectRatioIcon className={classes.sliderIcon} />
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.text}>{children}</p>
        {!!github && (
          <BlankLink href={github}>
            <div className={classes.githubWrapper}>
              Check the code out
              <img
                className={classes.githubIcon}
                src={github_icon}
                alt="github"
              />
            </div>
          </BlankLink>
        )}
      </div>
    </div>
  );
};

export default Project;
