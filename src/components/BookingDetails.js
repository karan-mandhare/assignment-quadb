import React, { useEffect, useState } from "react";

const BookingDetails = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tickets, setTickets] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("bookingData");

    if (storedData) {
      const { username, email, phoneNumber, tickets } = JSON.parse(storedData);
      setUsername(username);
      setEmail(email);
      setPhoneNumber(phoneNumber);

      const ticketsAmount = parseInt(tickets, 10) * 100;
      setTickets(ticketsAmount);
    }
  }, []);

  return (
    <div className="w-1/2 mx-auto my-12 p-8 text-left bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        User Information
      </h1>
      <div className="p-4 border rounded-md shadow-md">
        <h3 className="text-lg mb-2">Name : {username}</h3>
        <h3 className="text-lg mb-2">Email Address : {email}</h3>
        <h3 className="text-lg mb-2">Mobile Number : {phoneNumber}</h3>
        <h3 className="text-lg mb-2">Amount Payable : ₹{tickets}</h3>
      </div>
    </div>
  );
};

export default BookingDetails;
