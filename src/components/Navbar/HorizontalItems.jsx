import { Box, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HorizontalItems = ({ on_top, nav_links, scrollTo, styles }) => {
  const navigate = useNavigate();

  return (
    <Box
      className={"Transition-1"}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "flex",
        },
        position: "relative",
        gap: on_top ? "4rem" : "1rem",
        top: on_top ? "90vh" : "0",
      }}
    >
      {nav_links.map((item, index) => (
        <div className={styles.navItemsWrapper} key={index}>
          <Box
            className="Transition-1"
            onClick={() => {
              if (item.element_id === undefined) {
                navigate(item.link);
              } else {
                scrollTo(item.element_id)
              }
            }}
            sx={{
              cursor: "pointer",
              color: on_top ? "var(--text-main-2)" : "var(--text-color0)",
              fontWeight: on_top ? "bold" : "normal",
              padding: "0.4rem",
              gap: "0.5rem",
              display: "flex",
              whiteSpace: "nowrap",
              "&:hover": {
                color: on_top ? "var(--text-color0)" : "var(--text-color0)",
                transition: "color 0.3s",
              },
              "&:after": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: "0",
                left: "0",
                backgroundColor: on_top
                  ? "var(--text-color0)"
                  : "var(--text-color0)",
                transform: "scaleX(0)",
                transformOrigin: "bottom right",
                transition: "transform 0.3s",
              },
              "&:hover:after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left",
              },
            }}
          >
            <Icon
              component={item.icon}
              className="Transition-1"
              sx={{
                fontSize: on_top ? "1.3rem" : "0",
                transition: "all 500ms cubic-bezier(0.67, 0.01, 0.34, 0.99)",
              }}
            />
            {item.name}
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default HorizontalItems;
