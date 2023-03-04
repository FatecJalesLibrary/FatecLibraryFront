import { Route, Routes } from "react-router-dom";
import GuestRoutes from "./GuestRoutes";
import PrivateRoutes from "./PrivateRoutes";

const RoutesContainer = () => {

  return (
    <Routes>
      <Route path={"/*"} element={<GuestRoutes />} />
      <Route path={"/dashboard/*"} element={<PrivateRoutes />} />
    </Routes>
  )
}

export default RoutesContainer;