import { Typography } from "@mui/material";

import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";

const TestimonialCard = ({
  text,
  name,
  occupation,
  company,
  avatar,
}) => {
  return (
    <div
      style={{
        flexGrow: 1,
        maxWidth: "26rem",
        gap: "1.2rem",
        display: "flex",
        flexDirection: "column",
        margin: "0.4rem 0.4rem",
      }}
    >
      <div style={{ color: "var(--accent-color4)" }}>
        <StarPurple500OutlinedIcon />
        <StarPurple500OutlinedIcon />
        <StarPurple500OutlinedIcon />
        <StarPurple500OutlinedIcon />
        <StarPurple500OutlinedIcon />
      </div>
      <Typography
        variant="body1"
        component="div"
        sx={{
          fontSize: "1.1rem",
          // backgroundColor: "white",
          // height: "6rem",
        }}
      >
        "{text}"
      </Typography>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div>
          <img
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "10rem",
              backgroundPosition: "center",
              backgroundSize: "cover",
              boxShadow: "0 0 0 0.1rem var(--accent-color3)",
              objectFit: "cover",
            }}
            src={avatar}
            alt=""
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
            }}
          >
            {name}
          </span>
          <span style={{ fontSize: "1rem" }}>
            {occupation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
