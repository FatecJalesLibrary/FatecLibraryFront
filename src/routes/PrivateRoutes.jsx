// import Dashboard from "pages/private/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoutes = ({ on_top }) => {
  return (
    <>
      {/* <Navbar {...{on_top}} /> */}

      <Routes>
        {/* index */}
        {/* <Route path={"/*"} element={<Dashboard />} /> */}

        {/* generic 404 */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>

      {/* <Footer /> */}
    </>
  )
}

export default PrivateRoutes;