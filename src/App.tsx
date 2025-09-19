import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, useReducer } from "react";

import { initialTime, updateTimes } from "./reducers/TimeReducers";


const HomePage = lazy(() => import("./pages/HomePage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const ConfirmedBooking=lazy(()=>import("./components/ConfirmedBooking"));

export default function App() {
  const [availableTime, dispatch] = useReducer(updateTimes, [], initialTime);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<HomePage />} />
          <Route
            path="reservations"
            element={<BookingPage time={availableTime} dispatch={dispatch} />}
            
          />
           <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Route>
      </Routes>
    </>
  );
}
