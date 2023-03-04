import logo_white from "../../assets/static/logo/main_white.svg";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RateReviewIcon from "@mui/icons-material/RateReview";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Icon } from "@mui/material";
import { FaSignInAlt } from "react-icons/fa";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HorizontalItems from "./HorizontalItems";
import VerticalItems from "./VerticalItems";

const Navbar = ({ on_top, setOnTop, setForceOnTop }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const nav_links = [
    {
      name: "Home",
      link: "/",
      element_id: "#home",
      icon: HomeIcon,
    },
    {
      name: "Quem somos",
      link: "/",
      element_id: "#quem-somos",
      icon: GroupsIcon,
    },
    {
      name: "Por que nos escolher",
      link: "/",
      element_id: "#servicos",
      icon: MiscellaneousServicesIcon,
    },
    {
      name: "Livros",
      link: "/livros",
      icon: RateReviewIcon,
    },
  ];

  const scrollTo = (element_id) => {
    if (location.pathname === "/") {
      const element = document.querySelector(element_id);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // alert("codigo para redirecionar a home comentado para testes futuros");
      navigate("/", { replace: true });
      // after navigate to home, scroll to element
      setTimeout(() => {
        const element = document.querySelector(element_id);
        element.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
    if (location.pathname !== "/") {
      setOnTop(false);
      setForceOnTop(true);
    } else {
      setOnTop(true);
      setForceOnTop(false);
    }
  }, [location]);

  // responsive menu
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav
      // NavbarContainer = main styles
      // Transition = main transition
      // NavbarOnTop = styles when navbar is on top
      className={
        styles.NavbarContainer +
        " " +
        "Transition-1" +
        (on_top ? " " + styles.NavbarOnTop : "")
      }
    >
      {/* responsive menu items */}
      <VerticalItems
        {...{ openMenu, setOpenMenu, nav_links, scrollTo, styles, logo_white }}
      />
      <div
        className={"Transition-1"}
        style={{
          maxWidth: on_top ? "100%" : "1536px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: on_top
            ? "0.6rem 0.6rem 0.6rem 2rem"
            : "0.6rem 0.6rem 0.6rem 2rem",
          marginBottom: "0",
          borderRadius: "5rem",
          zIndex: 100,
          backgroundColor: on_top ? "transparent" : "var(--navbar-color)",
          backdropFilter: on_top ? "none" : "blur(2rem)",
          boxShadow: on_top
            ? "none"
            : "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        }}
      >
        <a href="/">
          <img
            className={"Transition-1"}
            src={logo_white}
            alt="Logotipo da EnterScience"
            style={{
              width: on_top ? "10rem" : "8rem",
              height: "3.4rem",
            }}
          />
        </a>

        {/* main items */}
        <HorizontalItems {...{ on_top, nav_links, scrollTo, styles }} />

        <div
          className="Transition-1"
          style={{
            width: on_top ? "10rem" : "8rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link to={"/login"}>
            <button
              className={`Transition-1 ${styles.loginButton}`}
              style={{
                position: "relative",
                letterSpacing: "0.1rem",
                perspective: "1500px",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className={`${styles.cardFlipEffect} Transition-1`} />
              <FaSignInAlt
                style={{
                  marginRight: "0.6rem",
                  display: "flex",
                  zIndex: 2,
                }}
                className="Transition-1"
              />
              <span style={{ zIndex: 2, position: "relative" }}>Login</span>
            </button>
          </Link>

          <MenuRoundedIcon
            onClick={() => setOpenMenu(true)}
            sx={{
              display: { xs: "block", md: "none" },
              fontSize: "2.5rem",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
