import Footer from "components/Footer";
import Navbar from "components/Navbar";
import LoginPage from "pages/public/auth/LoginPage";
import Complaint from "pages/public/Denuncia";
import HomePage from "pages/public/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import LibraryPage from "pages/public/Library";

const GuestRoutes = () => {
  // this structure is to get the scroll position
  // a lot of components are using this so dont delete it :)
  const [on_top, setOnTop] = useState(true);
  const [force_on_top, setForceOnTop] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (force_on_top) {
        setOnTop(false);
        return;
      }

      if (window.pageYOffset < 50) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    };

    return () => (window.onscroll = null);
  });

  return (
    <>
      <Navbar {...{ on_top, setOnTop, setForceOnTop }} />

      <Routes>
        {/* index */}
        <Route path={"/*"} element={<HomePage {...{on_top}} />} />

        <Route path={"/livros"} element={<LibraryPage {...{on_top}} />} />

        <Route path={"/faca-uma-denuncia"} element={<Complaint />} />

        {/* auth */}
        <Route path={"/login"} element={<LoginPage />} />

        {/* generic 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
};

export default GuestRoutes;
