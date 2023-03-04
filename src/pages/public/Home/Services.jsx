import CustomSection from "components/CustomSection";
import { Container, Box } from "@mui/system";
import { Typography } from "@mui/material";
import styles from "./styles.module.css";
// import arrow_white from "assets/static/arrow_white.png";

import services1 from "assets/static/landing/ai.svg";
import services2 from "assets/static/landing/dev.svg";
import services3 from "assets/static/landing/analytics.svg";
import { Parallax } from "react-scroll-parallax";
import ScrollTransition from "components/ScrollTransition";

const Services = ({ landing_data }) => {
  return (
    <CustomSection
      bg_color="var(--background-0)"
      style={{
        overflow: "hidden",
        minHeight: "auto",
        padding: "8rem 0",
      }}
      id="servicos"
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100vw",
        }}
      >
        <ScrollTransition>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "1.4rem",
            }}
          >
            Por que nos escolher
          </Typography>
        </ScrollTransition>

        <ScrollTransition>
          <Typography
            variant="p"
            component="p"
            sx={{
              textAlign: "center",
              margin: "0 auto",
              marginBottom: "4rem",
              fontWeight: "normal",
              fontSize: "1.1rem",
              maxWidth: "30rem",
              "&:after": {
                content: "''",
                display: "block",
                marginTop: "30px",
                width: "40px",
                borderTop: "2px solid #444",
                margin: "30px auto 0",
              },
            }}
          >
            Lorem ipsum dolor sit amet
          </Typography>
        </ScrollTransition>

        <ScrollTransition>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8rem 1rem",
              paddingTop: "4rem",
            }}
          >
            <ServiceCard
              title={landing_data[0].title}
              description={landing_data[0].text}
              image={landing_data[0].image}
              glowColor={landing_data[0].glowColor}
              speed={15}
            />
            <ServiceCard
              title={landing_data[1].title}
              description={landing_data[1].text}
              image={landing_data[1].image}
              glowColor={landing_data[1].glowColor}
              speed={30}
            />
            <ServiceCard
              title={landing_data[2].title}
              description={landing_data[2].text}
              image={landing_data[2].image}
              glowColor={landing_data[2].glowColor}
              speed={45}
            />
          </div>
        </ScrollTransition>
      </Container>
    </CustomSection>
  );
};

const ServiceCard = ({ title, description, image, glowColor, speed }) => {
  return (
    <Box
      sx={{
        width: "24rem",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        padding: "0rem 2rem",
        borderRadius: "0.8rem",
        position: "relative",
        transition: "all 0.3s",
        cursor: "pointer",
        gap: "1rem",
        "&:hover": {
          // backgroundColor: "var(--background-0)",
          transform: "translateY(-1rem)",
        },
        "&:hover img": {
          WebkitFilter: `drop-shadow(0px 0px 40px ${glowColor})`,
          filter: `drop-shadow(0px 0px 40px ${glowColor})`,
        },
      }}
    >
      <Box
        component="img"
        className="Transition-1"
        src={image}
        alt="Ícone do cartão"
        sx={{
          height: "10rem",
          marginBottom: "1rem",
          margin: "0 auto",
          marginBottom: "2rem",
          WebkitFilter: `drop-shadow(0px 0px 100px ${glowColor})`,
          filter: `drop-shadow(0px 0px 100px ${glowColor})`,
        }}
      />

      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "var(--text-main-2)",
          width: "max-content",
          margin: "0 auto",
          marginBottom: "1rem",
        }}
      >
        {title
          .replace("Aqui você encontra <a href='test'>", "")
          .replace("</a>", "")}
      </h3>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "normal",
          color: "var(--text-main-1)",
          textAlign: "center",
          lineHeight: "1.5rem",
        }}
      >
        {description}
      </p>

      <button
        className={`Transition-1 ${styles.Button}`}
        style={{
          position: "relative",
          margin: "0 auto",
          width: "max-content",
        }}
      >
        Ver mais
      </button>
    </Box>
  );
};

export default Services;
