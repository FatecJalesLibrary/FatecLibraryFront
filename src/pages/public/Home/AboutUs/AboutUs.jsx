import { Container } from "@mui/system";
import CustomSection from "components/CustomSection";
import about_us from "assets/static/landing/about_us.svg";
import { Typography, Box } from "@mui/material";
import team from "assets/static/landing/team.jpg";
import mission from "assets/static/landing/mission.jpg";
import do_img from "assets/static/landing/do.jpg";
import styles from "./styles.module.css";
import { Parallax } from "react-scroll-parallax";
import ScrollTransition from "components/ScrollTransition";

const AboutUs = ({ on_top }) => {
  return (
    <CustomSection
      style={{
        overflow: "hidden",
        position: "relative",
      }}
      id="quem-somos"
      bg_color="var(--background-color1)"
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100vw",
          minHeight: "100vh",
          padding: "8rem 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
            },
            gap: "2rem",
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
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
              alignItems: "flex-start",
              margin: {
                xs: "auto auto 0 auto",
                sm: "auto auto 0 auto",
                md: "auto",
              },
            }}
          >
            <Box
              sx={{
                borderLeft: {
                  xs: "none",
                },
                padding: "1rem",
                paddingLeft: {
                  xs: "0",
                  sm: "2rem",
                  md: "2rem",
                },
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <ScrollTransition>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "2rem",
                      sm: "2.8rem",
                      md: "3.8rem",
                    },
                  }}
                >
                  A{" "}
                  <span
                    style={{
                      color: "var(--accent-color3)",
                      fontWeight: "bold",
                    }}
                  >
                    FATEC
                  </span>{" "}
                  <span style={{ fontWeight: "normal" }}>library</span>
                </Typography>
              </ScrollTransition>

              <ScrollTransition
                sx={{
                  maxWidth: {
                    xs: "100%",
                    sm: "100%",
                    md: "80%",
                  },
                  padding: {
                    xs: "0 2rem",
                    sm: "0 2rem",
                    md: "0",
                  },
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "normal",
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.2rem",
                    },
                    lineHeight: "1.8rem",
                    textAlign: "justify",
                  }}
                >
                  Bem-vindo à Fatec Library, uma livraria online dedicada a
                  oferecer a você a melhor seleção de livros de qualidade. Nós
                  somos apaixonados por livros e acreditamos que a leitura é uma
                  das melhores formas de expandir horizontes, explorar novas
                  ideias e se divertir.
                </Typography>
              </ScrollTransition>
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              maxWidth: "28rem",
              margin: {
                xs: "0 auto auto auto",
                sm: "0 auto auto auto",
                md: "auto",
              },
            }}
          >
            <ScrollTransition>
              <img
                src={about_us}
                alt="Sobre nós"
                style={{
                  width: "150%",
                  position: "relative",
                  right: "50%",
                  zIndex: "0",
                  WebkitFilter: `drop-shadow(0px 0px 198px rgba(124, 50, 225, 1))`,
                  filter: `drop-shadow(0px 0px 198px rgba(124, 50, 225, 1))`,
                }}
              />
            </ScrollTransition>
          </Box>
        </Box>

        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
            },
            flexDirection: "column",
          }}
        >
          <ScrollTransition>
            <img
              src={about_us}
              alt="Sobre nós"
              style={{
                width: "100%",
                position: "relative",
                top: "5rem",
                zIndex: "0",
                margin: "auto",
                WebkitFilter: `drop-shadow(0px 0px 198px rgba(124, 50, 225, 1))`,
                filter: `drop-shadow(0px 0px 198px rgba(124, 50, 225, 1))`,
              }}
            />
          </ScrollTransition>
        </Box>

        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4rem 2rem",
              padding: "8rem 0 4rem 0",
            }}
          >
            <ServiceCard
              title="QUEM SOMOS?"
              description="Nós nos esforçamos para ser uma fonte confiável para todos os seus livros favoritos e estamos sempre procurando as últimas novidades e os clássicos atemporais que merecem ser descobertos."
              image={mission}
              speed={15}
            />
            <ServiceCard
              title="POR QUE NOS ESCOLHER?"
              description="Além de nossa vasta seleção de livros, nos orgulhamos de oferecer uma experiência de compra online simples e intuitiva, com entrega rápida e confiável em todo o país. "
              image={team}
              speed={30}
            />
            <ServiceCard
              title="O QUE NÓS FAZEMOS?"
              description="Na Fatec Library, acreditamos que a leitura é para todos e estamos comprometidos em tornar a literatura acessível a todos os nossos clientes."
              image={do_img}
              speed={45}
            />
          </div>
        </div>
      </Container>
    </CustomSection>
  );
};

export default AboutUs;

const ServiceCard = ({ title, description, image, speed }) => {
  return (
    <Box
      className={`${styles.serviceCard} Transition-1`}
      sx={{
        width: "24rem",
        flexGrow: 1,
        padding: "0.8rem",
        borderRadius: "0.8rem",
        position: "relative",
        // transition: "all 0.3s",
        cursor: "pointer",
        "&:hover": {
          // backgroundColor: "var(--background-0)",
          transform: "translateY(-1rem)",
          boxShadow: "0 1rem var(--background-2)",
        },
        perspective: "1500px",
      }}
    >
      {/* <div className={`${styles.cardFlipEffect} Transition-1`} /> */}
      <ScrollTransition
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <img
          src={image}
          alt="Ícone do cartão"
          style={{
            width: "100%",
            height: "14rem",
            marginBottom: "1rem",
            objectFit: "cover",
            borderRadius: "0.8rem 0.8rem 0 0",
            WebkitMaskImage:
              "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            zIndex: 2,
          }}
        />
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--text-main-2)",
            position: "relative",
            width: "max-content",
            zIndex: 2,
            margin: "0 auto",
            bottom: "3rem",
          }}
        >
          {title
            .replace("Somos especialistas em <a href='test'>", "")
            .replace("</a>", "")}
        </h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: "normal",
            color: "var(--text-main-1)",
            textAlign: "justify",
            position: "relative",
            bottom: "2rem",
            zIndex: 2,
          }}
        >
          {description}
        </p>
      </ScrollTransition>
    </Box>
  );
};
