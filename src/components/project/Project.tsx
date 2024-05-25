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

  const elemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(elemRef.current, {
      y: "40px",
      opacity: 0,
      duration: 1.2,
      ease: "circ.out",
      scrollTrigger: {
        trigger: elemRef.current,
        start: "top 70%",
      },
    });
    gsap.from(titleRef.current, {
      delay: 0.3,
      x: "-30px",
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
      scrollTrigger: titleRef.current,
    });
    gsap.from(childrenRef.current, {
      delay: 0.5,
      x: "-80px",
      opacity: 0,
      transform: "matrix(1, 0, -0.4, 1, 1, 0",
      duration: 1,
      ease: "circ.out",
      scrollTrigger: childrenRef.current,
    });
    gsap.from(githubRef.current, {
      delay: 0.7,
      y: "20px",
      opacity: 0,
      duration: 0.4,
      ease: "circ.out",
      scrollTrigger: githubRef.current,
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
    <div ref={elemRef} className={classes.wrapper}>
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
        <div>
          <AspectRatioIcon className={classes.sliderIcon} />
          <h3 ref={titleRef} className={classes.title}>
            {title}
          </h3>
          <p ref={childrenRef} className={classes.text}>
            {children}
          </p>
        </div>
        {!!github && (
          <div ref={githubRef} className={classes.githubWrapper}>
            <BlankLink href={github}>
              Github link
              <img
                className={classes.githubIcon}
                src={github_icon}
                alt="github"
              />
            </BlankLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
