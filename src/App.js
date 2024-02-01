import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowSummary from "./components/ShowSummary";
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import BookingDetails from "./components/BookingDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:showId" element={<ShowSummary />} />
        <Route path="/book-ticket/:id/:name" element={<BookingForm />} />
        <Route path="/details/:username" element={<BookingDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
