import React, { useEffect, useRef } from "react";
import { useStyles } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAppTheme from "../../../themes/ThemeStyles";
import github_icon from "../../../assets/images/footer/github_hover.svg";
import out_icon from "../../../assets/images/icons/Out.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlankLink from "../../../components/menu/BlankLink/BlankLink";
import Button from "../../../components/menu/Button/Button";

type PropsType = {
  images: any[];
  title: string;
  text: any;
  link: string;
  github?: string;
};

const ProjectCard: React.FC<PropsType> = ({
  title,
  text,
  images,
  link,
  github,
}) => {
  const classes = useStyles();
  const appTheme = useAppTheme();

  const elemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elemRef.current,
        start: "top 40%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    tl.from(
      elemRef.current,
      {
        y: "40px",
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
      },
      "-=0.5"
    );
    tl.from(
      titleRef.current,
      {
        x: "-30px",
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
      },
      "-=0.5"
    );
    tl.from(
      childrenRef.current,
      {
        x: "-80px",
        opacity: 0,
        transform: "matrix(1, 0, -0.4, 1, 1, 0",
        duration: 0.7,
        ease: "circ.out",
      },
      "-=0.5"
    );
    tl.from(
      githubRef.current,
      {
        y: "20px",
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
      },
      "-=0.5"
    );
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
        <Slider {...settings} className={classes.slider}>
          {images.map((img, i) => (
            <img key={i} src={img} alt="work image" />
          ))}
        </Slider>
      </div>
      <div className={classes.description}>
        <div>
          <h3 ref={titleRef} className={classes.title}>
            {title}
          </h3>
          <p ref={childrenRef} className={classes.text}>
            {text}
          </p>
        </div>
        <div ref={githubRef} className={classes.actions}>
          <BlankLink href={github}>
            <Button className={`${appTheme.button} ${classes.button}`}>
              Github <img src={github_icon} alt="github" />
            </Button>
          </BlankLink>
          <BlankLink href={link}>
            <Button className={`${appTheme.button} ${classes.button}`}>
              Demo <img src={out_icon} alt="demo" />
            </Button>
          </BlankLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
