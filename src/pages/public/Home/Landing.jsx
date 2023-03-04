import { Container } from "@mui/system";
import CustomSection from "components/CustomSection";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { Box, Typography } from "@mui/material";
import Typing from "./Typing";
import carousel_bg from "assets/static/landing/carousel_bg.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Landing = ({ landing_data, on_top }) => {
  const [slide_index, setSlideIndex] = useState(0);
  const [interval_timer, setIntervalTimer] = useState(8400);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slide_index) =>
        slide_index === landing_data.length - 1 ? 0 : slide_index + 1
      );
    }, interval_timer);
    return () => clearInterval(interval);
  }, []);

  return (
    <CustomSection
      style={{
        overflow: "hidden",
      }}
      id="home"
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100vw",
        }}
      >
        <KeyboardDoubleArrowDownIcon
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2rem",
            fontSize: on_top ? "3rem" : "0",
            transition: "all 0.5s ease",
            cursor: "pointer",
            zIndex: "100",
          }}
        />

        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            width: "100%",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            justifyContent: {
              xs: "center",
              sm: "center",
            },
            alignItems: {
              xs: "center",
              sm: "center",
            },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "60%",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "3%",
              zIndex: 2,
              gap: "2rem",

              position: "relative",
              bottom: {
                xs: "20vh",
                sm: "20vh",
                md: "0",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "var(--text-color1)",
                fontWeight: "bold",
              }}
            >
              Nós acreditamos no poder dos livros.
            </Typography>

            <Typing {...{ landing_data, slide_index }} />

            <Typography
              variant="h5"
              sx={{
                color: "var(--text-color1)",
                fontWeight: "bold",
              }}
            >
              Nossa livraria tem uma seleção cuidadosamente escolhida de títulos
              que vão expandir seus horizontes e estimular sua imaginação.
            </Typography>
          </Box>

          <Box
            sx={{
              width: "40%",
              position: "relative",
            }}
          >
            <img
              src={carousel_bg}
              alt="Fundo do Carousel"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1.4)",
              }}
            />
            <Carousel {...{ slide_index, landing_data, interval_timer }} />
          </Box>
        </Box>
      </Container>
    </CustomSection>
  );
};

export default Landing;
