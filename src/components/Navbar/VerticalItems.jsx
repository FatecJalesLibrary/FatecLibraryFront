import { Icon } from "@mui/material";
import { Box } from "@mui/system";
import CustomModal from "components/CustomModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const style = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  backgroundColor: "var(--background-color1)",
  color: "var(--text-color0)",
  fontSize: "1.4rem",
  top: "0",
};

const VerticalItems = ({
  openMenu,
  setOpenMenu,
  nav_links,
  scrollTo,
  styles,
  logo_white,
}) => {
  return (
    <CustomModal style={style} visible={openMenu}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "2rem",
            justifyContent: "space-between",
          }}
        >
          <a href="/">
            <img
              className={"Transition-1"}
              src={logo_white}
              alt="Logotipo da EnterScience"
              style={{
                width: "10rem",
              }}
            />
          </a>

          <CloseRoundedIcon
            onClick={() => setOpenMenu(false)}
            style={{
              cursor: "pointer",
              fontSize: "2.4rem",
            }}
          />
        </div>
        {nav_links.map((item, index) => (
          <div className={styles.navItemsWrapper} key={index}>
            <Box
              className="Transition-1"
              onClick={() => {
                scrollTo(item.element_id);
                setOpenMenu(false);
              }}
              sx={{
                cursor: "pointer",
                color: "var(--text-color0)",
                fontWeight: "normal",
                padding: "0.4rem",
                gap: "1rem",
                display: "flex",
                whiteSpace: "nowrap",
                alignItems: "center",
                "&:hover": {
                  color: "var(--text-color0)",
                  transition: "color 0.3s",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "2px",
                  bottom: "0",
                  left: "0",
                  backgroundColor: "var(--text-color0)",
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
                  fontSize: "2rem",
                  transition: "all 500ms cubic-bezier(0.67, 0.01, 0.34, 0.99)",
                }}
              />
              {item.name}
            </Box>
          </div>
        ))}
      </div>
    </CustomModal>
  );
};

export default VerticalItems;
