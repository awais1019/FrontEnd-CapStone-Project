
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ReservationPage from "./pages/ReservationPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<HomePage />} />
           <Route path="reservations" element={<ReservationPage />} />

        </Route>
      </Routes>
    </>
  );
}
