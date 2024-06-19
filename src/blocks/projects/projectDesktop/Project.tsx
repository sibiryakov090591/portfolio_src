import React, { useEffect, useRef } from "react";
import { useStyles } from "./styles";
import Slider from "react-slick";
import github_icon from "../../../assets/images/footer/github_hover.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import out_icon from "../../../assets/images/icons/Out.svg";
import { Container, Fade, Grid, Theme, withStyles } from "@material-ui/core";
import BlankLink from "../../../components/menu/BlankLink/BlankLink";
import Tooltip from "@material-ui/core/Tooltip";
import { AppTheme } from "../../../themes/paletteTypes";

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

  const sliderRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    tl.from(sliderRef.current, {
      x: isReverse ? "-40px" : "40px",
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
    });
    tl.from(
      titleRef.current,
      {
        y: "-30px",
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
      },
      "-=0.5"
    );
    tl.from(
      textRef.current,
      {
        y: "30px",
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
      },
      "-=0.5"
    );
    tl.from(
      actionsRef.current,
      {
        y: "30px",
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
      },
      "-=0.3"
    );
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

  const HtmlTooltip = withStyles((theme: any) => ({
    tooltip: {
      backgroundColor: theme.palette.app.grey700,
      color: theme.palette.text.green,
      fontWeight: "bold",
      maxWidth: 220,
      fontSize: "14px",
      padding: "6px 10px",
    },
  }))(Tooltip);

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
              <h3 ref={titleRef} className={classes.projectTitle}>
                {title}
              </h3>
              <div ref={textRef}>{text}</div>
              <div ref={actionsRef} className={classes.actions}>
                <HtmlTooltip title="Demo" arrow TransitionComponent={Fade}>
                  <div>
                    <BlankLink href={link}>
                      <img src={out_icon} alt="out to site" />
                    </BlankLink>
                  </div>
                </HtmlTooltip>
                <HtmlTooltip title="Github" arrow TransitionComponent={Fade}>
                  <div>
                    <BlankLink href={github}>
                      <img src={github_icon} alt="github" />
                    </BlankLink>
                  </div>
                </HtmlTooltip>
              </div>
            </div>
          </Grid>
          <Grid innerRef={sliderRef} item sm={6}>
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
