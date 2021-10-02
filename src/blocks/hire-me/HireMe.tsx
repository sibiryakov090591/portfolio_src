import React, { useState } from "react";
import Title from "../../components/title/Title";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import { Popover, Box, Button } from "@material-ui/core";
import useAppTheme from "../../themes/ThemeStyles";
import FileSaver from "file-saver";
import resumeEn from "../../resume/resume_eng.pdf";
import resumeRu from "../../resume/resume_ru.pdf";

const HireMe: React.FC = () => {
  const classes = useStyles();
  const appTheme = useAppTheme();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Title title="Resume" index="03" />
        <Button className={appTheme.button} onClick={handleClick}>
          Download
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box className={classes.popoverWrapper}>
            <Button className={classes.button} onClick={downloadHandler("en")}>
              <span className={classes.buttonText}>In english</span>
            </Button>
            <Button className={classes.button} onClick={downloadHandler("ru")}>
              <span className={classes.buttonText}>In russian</span>
            </Button>
          </Box>
        </Popover>
      </Container>
    </section>
  );
};

export default HireMe;
