import { Box, Container } from "@mui/material";
import logo_white from "../../assets/static/logo/main_white.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate, useLocation } from "react-router-dom";

const footer_links = [
  {
    name: "Quem somos",
    link: "/",
    element_id: "#quem-somos",
  },
  {
    name: "Por que nos escolher",
    link: "/",
    element_id: "#servicos",
  },
  {
    name: "Livros",
    link: "/",
  },
  {
    name: "Política de privacidade",
    link: "/politica-de-privacidade",
  },
  {
    name: "Termos de uso",
    link: "/termos-de-uso",
  },
  {
    name: "Faça uma denúncia",
    link: "/faca-uma-denuncia",
  },
];

const social_medias_button_style = {
  fontSize: "2.1rem",
  opacity: "0.6",
  cursor: "pointer",
  color: "white",
  "&:hover": { opacity: 1 },
};

const social_medias = [
  {
    link: "/",
    icon: <InstagramIcon sx={social_medias_button_style} />,
  },
  {
    link: "/",
    icon: <FacebookIcon sx={social_medias_button_style} />,
  },
  {
    link: "/",
    icon: <LinkedInIcon sx={social_medias_button_style} />,
  },
];

const Footer = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  const scrollTo = (element_id) => {
    console.log(location.pathname);
    if ((location.pathname = "/")) {
      const element = document.querySelector(element_id);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("codigo para redirecionar a home comentado para testes futuros");
      // navigate('/', { replace: true });
    }
  };

  return (
    <footer style={{ backgroundColor: "var(--background-color1)", padding: "8rem 0" }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "140%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "var(--text-reverse-1)",
            fontSize: "0.8rem",
          }}
        >
          Copyrights © {new Date().getFullYear()} All Rights Reserved by Fatec library Inc.
        </span>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            height: { md: "10rem", xs: "auto" },
            gap: "0.6rem 2rem",
            // transform: { md: "translateX(60%)", xs: "auto" },
          }}
        >
          {footer_links.map((item, index) => (
            <Box
              key={index}
              component="a"
              // href={item.link}
              sx={{
                color: "white",
                padding: "0.2rem 0",
                cursor: "pointer",
                "&:hover": { filter: "brightness(0.7)" },
              }}
              onClick={() => scrollTo(item.element_id)}
            >
              {item.name}
            </Box>
          ))}
        </Box>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <a href="/">
            <img
              style={{ width: "12rem" }}
              src={logo_white}
              alt="Logotipo da Blueen Open"
            />
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            {social_medias.map((social_media, index) => (
              <a key={index} href={social_media.link} target={"_blank"}>
                {social_media.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
