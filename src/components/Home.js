import React from "react";
import ShowList from "./ShowList";
import useGetData from "../utils/useGetData";

const Home = () => {
  const shows = useGetData();

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="py-5 bg-blue-500 text-white text-center font-bold text-2xl shadow-md">TV Shows</h1>
      <div className="flex flex-wrap justify-center p-4">
        {shows.map((item) => (
          <ShowList key={item.show.id} show={item.show} />
        ))}
      </div>
    </div>
  );
};

export default Home;
