import { Container, Typography } from "@mui/material";
import CustomSection from "components/CustomSection";
import ScrollTransition from "components/ScrollTransition";
import { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import TestimonialCard from "./TestimonialCard";

const responsive = {
  0: {
    items: 1,
  },
  480: {
    items: 1,
  },
  780: {
    items: 2,
  },
  1300: {
    items: 3,
  },
};

const Depoimentos = () => {
  const [testimonies, setTestimonies] = useState([
    {
      name: "Consectetur Adipiscing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      avatar: "https://picsum.photos/200/300",
      occupation: "CEO do Gogle",
    },
    {
      name: "Tincidunt Lacinia",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      avatar: "https://picsum.photos/300/300",
      occupation: "Diretor da Eipou",
    },
    {
      name: "Aliquam Nisl",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      avatar: "https://picsum.photos/200/200",
      occupation: "Fundador da Microso Soft",
    },
  ]);
  const [readyToRender, setReadyToRender] = useState(true);

  // const getto = async () => {
  //   const res = await get(`${URL}api/testimonies`);

  //   if (res.httpCode === 200) {
  //     // setTestimonies(res.testimonies);
  //     let temp_testimonies = res.testimonies.map((data) => {
  //       return {
  //         name: data.name,
  //         text: data.text,
  //         avatar: STORAGE_URL+data.avatar_path,
  //         occupation: data.occupation,
  //       };
  //     });
  //     setTestimonies(temp_testimonies);
  //     setReadyToRender(true);
  //   }
  // };

  // useEffect(() => {
  //   getto().catch((e) => {
  //     console.log(e);
  //   });
  // }, []);

  return (
    readyToRender &&
    testimonies.length > 0 && (
      <CustomSection
        style={{
          overflow: "hidden",
          position: "relative",
          minHeight: "auto",
        }}
        id="depoimentos"
      >
        <Container
          maxWidth="xl"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
            margin: "auto",
            padding: "8rem 0",
            width: "100vw",
          }}
        >
          <ScrollTransition>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Depoimentos
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
              O que nossos clientes e parceiros falam de nós
            </Typography>
          </ScrollTransition>

          <ScrollTransition>
            <OwlCarousel
              className="owl-theme"
              loop
              dots={false}
              nav={false}
              items={3}
              center
              autoplay={true}
              autoplayTimeout={6000}
              responsive={responsive}
            >
              {testimonies.map((testimony, index) => (
                <TestimonialCard key={index} {...testimony} />
              ))}
            </OwlCarousel>
          </ScrollTransition>
        </Container>
      </CustomSection>
    )
  );
};

export default Depoimentos;
