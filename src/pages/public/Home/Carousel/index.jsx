import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const Carousel = ({ slide_index, landing_data, interval_timer }) => {
  const [first_time, setFirstTime] = useState(true);

  const [image_left, setImageLeft] = useState("");
  const [image_right, setImageRight] = useState("");
  const [glow_left, setGlowLeft] = useState("");
  const [glow_right, setGlowRight] = useState("");

  const [transiting, setTransiting] = useState(false);

  useEffect(() => {
    if (first_time === false) {
      setImageLeft(landing_data[slide_index].image);
      setGlowLeft(landing_data[slide_index].glowColor);
    }

    setImageRight(
      first_time
        ? landing_data[slide_index].image
        : landing_data[
            slide_index === landing_data.length - 1 ? 0 : slide_index + 1
          ].image
    );
    setGlowRight(
      first_time
        ? landing_data[slide_index].glowColor
        : landing_data[

          slide_index === landing_data.length - 1 ? 0 : slide_index + 1 
        ].glowColor
    );

    setTransiting(true);

    setTimeout(() => {
      setTransiting(false);
    }, 1500);

    setTimeout(() => {
      setImageLeft(
        first_time
          ? landing_data[slide_index].image
          : landing_data[
              slide_index === landing_data.length - 1 ? 0 : slide_index + 1
            ].image
      );
      setGlowLeft(
        first_time
          ? landing_data[slide_index].glowColor
          : landing_data[
              slide_index === landing_data.length - 1 ? 0 : slide_index + 1
            ].glowColor
      );
    }, 1500);
  }, [slide_index]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Box
        component='img'
        src={image_left || landing_data[landing_data.length - 1].image}
        alt="Imagem do carousel"
        sx={{
          position: "absolute",
          height: {
            xs: "30rem",
            sm: "32rem",
            md: "36rem",
            lg: "40rem",
          },
          maxWidth: "50rem",
          top: "50%",
          left: transiting ? "-100%" : "50%",
          transform: "translate(-50%, -50%)",
          opacity: transiting ? 0 : 1,
          transition: transiting ? "all 1s ease, opacity 800ms ease" : "",
          // glow effect
          WebkitFilter: `drop-shadow(0px 0px 198px ${glow_left})`,
          filter: `drop-shadow(0px 0px 198px ${glow_left})`,
        }}
      />
       {/* <img
        // className={styles.imageGlow}
        src={image_left || landing_data[landing_data.length - 1].image}
        alt="Imagem do carousel"
        style={{
          position: "absolute",
          top: "50%",
          left: transiting ? "-100%" : "50%",
          transform: "translate(-50%, -50%)",
          opacity: transiting ? 0 : 1,
          transition: transiting ? "all 1s ease, opacity 800ms ease" : "",
          // glow effect
          WebkitFilter: `drop-shadow(0px 0px 198px ${glow_left})`,
          filter: `drop-shadow(0px 0px 198px ${glow_left})`,
        }}
      /> */}


      <Box
        component='img'
        src={image_right}
        alt="Imagem do carousel"
        sx={{
          position: "absolute",
          height: {
            xs: "30rem",
            sm: "32rem",
            md: "36rem",
            lg: "40rem",
          },
          maxWidth: "50rem",
          top: "50%",
          left: transiting ? "50%" : "150%",
          opacity: transiting ? 1 : 0,
          transform: "translate(-50%, -50%)",
          transition: transiting ? "all 1s ease, opacity 800ms ease" : "",
          // glow effect
          WebkitFilter: `drop-shadow(0px 0px 198px ${glow_right})`,
          filter: `drop-shadow(0px 0px 198px ${glow_right})`,
        }}
      />
      {/* <img
        // className={styles.imageGlow}
        src={image_right}
        alt="Imagem do carousel"
        style={{
          position: "absolute",
          top: "50%",
          left: transiting ? "50%" : "150%",
          opacity: transiting ? 1 : 0,
          transform: "translate(-50%, -50%)",
          transition: transiting ? "all 1s ease, opacity 800ms ease" : "",
          // glow effect
          WebkitFilter: `drop-shadow(0px 0px 198px ${glow_right})`,
          filter: `drop-shadow(0px 0px 198px ${glow_right})`,
        }}
      /> */}
    </div>
  );
};

export default Carousel;
