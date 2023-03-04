import { Container, Typography } from "@mui/material";
import CustomSection from "components/CustomSection";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { useInView } from "react-intersection-observer";

import ScrollTransition from "components/ScrollTransition";

const responsive = {
  0: {
    items: 2,
  },
  630: {
    items: 3,
  },
  830: {
    items: 4,
  },
  1000: {
    items: 5,
  },
  1230: {
    items: 6,
  },
};

const Clientes = () => {
  const [testimonies, setTestimonies] = useState([
    {
      name: "Consectetur Adipiscing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      avatar: "https://picsum.photos/701/300",
      occupation: "CEO do Gogle",
    },
    {
      name: "Tincidunt Lacinia",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      avatar: "https://picsum.photos/700/301",
      occupation: "Diretor da Eipou",
    },
    {
      name: "Aliquam Nisl",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
      avatar: "https://picsum.photos/701/301",
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
        bg_color="var(--background-color1)"
        style={{
          overflow: "hidden",
          position: "relative",
          minHeight: "auto",
        }}
        id="clientes"
      >
        <Container
          maxWidth="xl"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
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
              Nossos clientes
            </Typography>
          </ScrollTransition>

          <ScrollTransition sx={{
            margin: "0 auto",
            marginBottom: "2rem",
          }}>
            <Typography
              variant="p"
              sx={{
                fontSize: "1.1rem",
                textAlign: "center",
                margin: "0 auto",
                fontWeight: "normal",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
          </ScrollTransition>

          <ScrollTransition>
            <OwlCarousel
              className="owl-theme"
              loop
              dots={false}
              nav={false}
              items={5}
              autoplay={true}
              autoplayTimeout={2000}
              responsive={responsive}
            >
              {
                testimonies.map((data, index) => {
                  return (
                    <div className="item" key={index}>
                      <img style={{ height: "6rem" }} src={data.avatar} />
                    </div>
                  );
                })
              }
            </OwlCarousel>
          </ScrollTransition>
        </Container>
      </CustomSection>
    )
  );
};

export default Clientes;
