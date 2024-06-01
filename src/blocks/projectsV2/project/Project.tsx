import React, { useEffect, useRef } from "react";
import { useStyles } from "./styles";
import Slider from "react-slick";
import github_icon from "../../../assets/images/footer/github_hover.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import out_icon from "../../../assets/images/icons/Out.png";
import { Container, Grid } from "@material-ui/core";
import BlankLink from "../../../components/menu/BlankLink/BlankLink";

type PropsType = {
  images: any[];
  title: string;
  text: any;
  link: string;
  github?: string;
  isReverse?: boolean;
};

const Project: React.FC<PropsType> = ({
  title,
  text,
  images,
  link,
  github,
  isReverse,
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
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={`${classes.project} ${isReverse ? "reverse" : ""}`}>
      <Container maxWidth={"lg"}>
        <Grid
          container
          alignItems="center"
          spacing={3}
          direction={isReverse ? "row-reverse" : "row"}
        >
          <Grid item sm={6}>
            <div
              className={`${classes.projectText} ${isReverse ? "reverse" : ""}`}
            >
              <h3 className={classes.projectTitle}>{title}</h3>
              {text}
              <div className={classes.actions}>
                <BlankLink href={link}>
                  <img src={out_icon} alt="out to site" />
                </BlankLink>
                <BlankLink href={github}>
                  <img src={github_icon} alt="github" />
                </BlankLink>
              </div>
            </div>
          </Grid>
          <Grid item sm={6}>
            <Slider
              {...settings}
              className={`${classes.slider} ${isReverse ? "reverse" : ""}`}
            >
              {images.map((img, i) => (
                <img key={i} src={img} alt="work image" />
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Project;
