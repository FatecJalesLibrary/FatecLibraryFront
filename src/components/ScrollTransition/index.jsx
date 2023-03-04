import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ScrollTransition = ({ sx, children }) => {
  const [showTransition, setShowTransition] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setShowTransition(true);
      }, 200);
    }
  }, [inView]);

  return (
    <Box
      ref={ref}
      className={`${showTransition ? "" : "scrollTransition"} Transition-2`}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default ScrollTransition;
