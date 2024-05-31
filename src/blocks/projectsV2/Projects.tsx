import React from "react";
import { useStyles } from "./styles";
import Title from "../../components/title/Title";
import { Container, Grid } from "@material-ui/core";
import github_icon from "../../assets/images/footer/github_hover.svg";
import out_icon from "../../assets/images/icons/Out.png";
import mavik_1 from "../../assets/images/projects/MavikPro/Mavik_1.jpg";
import mavik_2 from "../../assets/images/projects/MavikPro/Mavik_2.jpg";
import mavik_3 from "../../assets/images/projects/MavikPro/Mavik_3.jpg";
import chip_1 from "../../assets/images/projects/Chipassist/market_1.jpg";
import chip_2 from "../../assets/images/projects/Chipassist/market_2.jpg";
import chip_3 from "../../assets/images/projects/Chipassist/market_3.jpg";
import requests_1 from "../../assets/images/projects/Requests/requests_1.jpg";
import requests_2 from "../../assets/images/projects/Requests/requests_2.jpg";
import requests_3 from "../../assets/images/projects/Requests/requests_3.jpg";
import dashboard_1 from "../../assets/images/projects/Dashboard/dashboard_1.jpg";
import dashboard_2 from "../../assets/images/projects/Dashboard/dashboard_2.jpg";
import dashboard_3 from "../../assets/images/projects/Dashboard/dashboard_3.jpg";
import pcb_1 from "../../assets/images/projects/PCB/pcb_1.jpg";
import pcb_2 from "../../assets/images/projects/PCB/pcb_2.jpg";
import pcb_3 from "../../assets/images/projects/PCB/pcb_3.jpg";
import { useI18n } from "../../services/I18next";
import Slider from "react-slick";
import BlankLink from "../../components/menu/BlankLink/BlankLink";

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

const Projects: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18n("projects");

  return (
    <section id="projects" className={classes.projects}>
      <Title title={t("menu.projects")} index="03" />
      <div className={classes.project}>
        <Container maxWidth={"lg"}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item sm={6}>
              <div className={classes.projectText}>
                <h3 className={classes.projectTitle}>{t("ca.title")}</h3>
                {t("ca.text_2")}
                <div className={classes.actions}>
                  <BlankLink href={"https://chipassist.andrew-sib.com/"}>
                    <img src={out_icon} alt="out to site" />
                  </BlankLink>
                  <BlankLink
                    href={"https://github.com/sibiryakov090591/chipassist"}
                  >
                    <img src={github_icon} alt="github" />
                  </BlankLink>
                </div>
              </div>
            </Grid>
            <Grid item sm={6}>
              <Slider {...settings} className={classes.slider}>
                {[chip_1, chip_2, chip_3].map((img, i) => (
                  <img key={i} src={img} alt="work image" />
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={`${classes.project} reverse`}>
        <Container maxWidth={"lg"}>
          <Grid
            container
            direction="row-reverse"
            alignItems="center"
            spacing={3}
          >
            <Grid item sm={6}>
              <div className={`${classes.projectText} reverse`}>
                <h3 className={classes.projectTitle}>{t("requests.title")}</h3>
                {t("requests.text_2")}
                <div className={classes.actions}>
                  <BlankLink href={"https://requests.chipassist.com/"}>
                    <img src={out_icon} alt="out to site" />
                  </BlankLink>
                  <BlankLink
                    href={"https://github.com/sibiryakov090591/chipassist"}
                  >
                    <img src={github_icon} alt="github" />
                  </BlankLink>
                </div>
              </div>
            </Grid>
            <Grid item sm={6}>
              <Slider {...settings} className={`${classes.slider} reverse`}>
                {[requests_1, requests_2, requests_3].map((img, i) => (
                  <img key={i} src={img} alt="work image" />
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.project}>
        <Container maxWidth={"lg"}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item sm={6}>
              <div className={`${classes.projectText}`}>
                <h3 className={classes.projectTitle}>{t("mavik.title")}</h3>
                {t("mavik.text_2")}
                <div className={classes.actions}>
                  <BlankLink
                    href={
                      "https://sibiryakov090591.github.io/Project-Mavik/src/"
                    }
                  >
                    <img src={out_icon} alt="out to site" />
                  </BlankLink>
                  <BlankLink
                    href={"https://github.com/sibiryakov090591/Project-Mavik"}
                  >
                    <img src={github_icon} alt="github" />
                  </BlankLink>
                </div>
              </div>
            </Grid>
            <Grid item sm={6}>
              <Slider {...settings} className={classes.slider}>
                {[mavik_1, mavik_2, mavik_3].map((img, i) => (
                  <img key={i} src={img} alt="work image" />
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={`${classes.project} reverse`}>
        <Container maxWidth={"lg"}>
          <Grid
            container
            direction="row-reverse"
            alignItems="center"
            spacing={3}
          >
            <Grid item sm={6}>
              <div className={`${classes.projectText} reverse`}>
                <h3 className={classes.projectTitle}>{t("dashboard.title")}</h3>
                {t("dashboard.text_2")}
                <div className={classes.actions}>
                  <BlankLink
                    href={"https://main.d38hoihxf751c8.amplifyapp.com/"}
                  >
                    <img src={out_icon} alt="out to site" />
                  </BlankLink>
                  <BlankLink
                    href={
                      "https://github.com/sibiryakov090591/management_dashboard"
                    }
                  >
                    <img src={github_icon} alt="github" />
                  </BlankLink>
                </div>
              </div>
            </Grid>
            <Grid item sm={6}>
              <Slider {...settings} className={`${classes.slider} reverse`}>
                {[dashboard_1, dashboard_2, dashboard_3].map((img, i) => (
                  <img key={i} src={img} alt="work image" />
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.project}>
        <Container maxWidth={"lg"}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item sm={6}>
              <div className={`${classes.projectText}`}>
                <h3 className={classes.projectTitle}>{t("pcb_calc.title")}</h3>
                {t("pcb_calc.text_2")}
                <div className={classes.actions}>
                  <BlankLink href={"https://chipassist.andrew-sib.com/pcb"}>
                    <img src={out_icon} alt="out to site" />
                  </BlankLink>
                  <BlankLink
                    href={"https://github.com/sibiryakov090591/chipassist"}
                  >
                    <img src={github_icon} alt="github" />
                  </BlankLink>
                </div>
              </div>
            </Grid>
            <Grid item sm={6}>
              <Slider {...settings} className={classes.slider}>
                {[pcb_1, pcb_2, pcb_3].map((img, i) => (
                  <img key={i} src={img} alt="work image" />
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default Projects;
