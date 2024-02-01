import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tickets, setTickets] = useState("");
  const [error, setError] = useState("");

  const handleProceedClick = () => {
    if (!username || !email || !phoneNumber || !tickets) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      localStorage.setItem("bookingData", JSON.stringify({ username, email, phoneNumber, tickets }));
      navigate(`/details/${id}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-8 w-full max-w-md">
        <div className="bg-green-300 rounded-sm p-4 mb-6 text-center">
          <h1 className="text-red-400">{name}</h1>
          <h1 className="text-2xl font-bold">Booking Summary</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g., 123-456-7890"
              id="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tickets" className="block text-sm font-medium text-gray-600">
              Number of Tickets
            </label>
            <input
              type="number"
              placeholder=""
              id="tickets"
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            {error && <p className="text-red-600 text-center text-sm">{error}</p>}
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 rounded-lg bg-red-600 text-white border-2 border-red-600 hover:bg-red-500"
              onClick={handleProceedClick}
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
