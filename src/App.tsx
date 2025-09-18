
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy} from "react";


const HomePage = lazy(() => import("./pages/HomePage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<HomePage />} />
           <Route path="reservations" element={<BookingPage />} />

        </Route>
      </Routes>
    </>
  );
}
