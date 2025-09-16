
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ReservationPage from "./pages/ReservationPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<Home />} />
           <Route path="reservations" element={<ReservationPage />} />

        </Route>
      </Routes>
    </>
  );
}
