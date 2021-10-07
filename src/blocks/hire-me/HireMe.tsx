import React from "react";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import FileSaver from "file-saver";
import resumeEn from "../../resume/resume_eng.pdf";
import resumeRu from "../../resume/resume_ru.pdf";
import resumeImg from "../../images/resume.jpg";
import lang_en from "../../images/lang_en.svg";
import lang_ru from "../../images/lang_ru.svg";

const HireMe: React.FC = () => {
  const classes = useStyles();

  const downloadHandler = (lang: string) => () => {
    switch (lang) {
      case "ru": {
        FileSaver.saveAs(resumeRu, "resume_ru.pdf");
        break;
      }
      case "en": {
        FileSaver.saveAs(resumeEn, "resume_en.pdf");
        break;
      }
      default: {
        FileSaver.saveAs(resumeEn, "resume_en.pdf");
      }
    }
  };

  return (
    <section className={classes.hire}>
      <Container className={classes.hireContainer}>
        <Title title="Download resume" index="03" />

        <Box display="flex">
          <Box
            className={classes.resumeImgWrapper}
            onClick={downloadHandler("en")}
          >
            <img
              className={classes.resumeImg}
              src={resumeImg}
              alt="resume_en"
            />
            <img className={classes.langIcon} src={lang_en} alt="lang_icon" />
          </Box>
          <Box
            className={classes.resumeImgWrapper}
            onClick={downloadHandler("ru")}
          >
            <img
              className={classes.resumeImg}
              src={resumeImg}
              alt="resume_ru"
            />
            <img className={classes.langIcon} src={lang_ru} alt="lang_icon" />
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default HireMe;
