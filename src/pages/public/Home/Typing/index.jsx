// import ReactTyped from "react-typed";

import { useEffect, useState } from "react";
import ReactTyped from "react-typed";
import styles from "./styles.module.css";

const Typing = ({ landing_data, slide_index }) => {
  const [strings, setStrings] = useState([]);

  useEffect(() => {
    // extract the text from the landing_data
    const strings = landing_data.map((item) => item.title);
    setStrings(strings);
  }, []);

  const isTheLastSlide = () => {
    if (slide_index === landing_data.length - 1) {
      // custom speed
      return {
        typeSpeed: 9,
        backSpeed: 6,
        backDelay: 6500,
      };
    } else {
      // normal speed
      return {
        typeSpeed: 20,
        backSpeed: 8,
        backDelay: 7000,
      };
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "max-content",
          padding: "0.05rem 0.2rem",
          position: "relative",
        }}
        className={styles.typingContainer}
      >
        <ReactTyped
          strings={strings}
          typeSpeed={isTheLastSlide().typeSpeed}
          backSpeed={isTheLastSlide().backSpeed}
          backDelay={isTheLastSlide().backDelay}
          smartBackspace
          loop
          style={{
            fontSize: "2.6rem",
            zIndex: "2",
            color: "var(--text-color2)",
          }}
        />
        {/* <div
          style={{
            // background: 'red',
            background: "rgba(52, 155, 235, 0.2)",
            height: "50%",
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "0",
            zIndex: "1",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Typing;
