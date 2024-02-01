import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGetData from "../utils/useGetData";
import { IMG_URL } from "../constants/constant";

const ShowSummary = () => {
  const navigate = useNavigate();
  const data = useGetData();
  const movieId = useParams();

  const filterdData = data.find(
    (item) => item?.show?.id.toString() === movieId.showId
  );

  if (!filterdData) {
    // Handle the case where the show is not found
    return <div>Show not found</div>;
  }

  const { id, image, name, language, rating, schedule, summary } =
    filterdData?.show;

  const originalImageURL = image?.original;
  const days = schedule?.days;
  const time = schedule?.time;

  const handleBookTicket = () => {
    navigate(`/book-ticket/${id}/${name}`);
  };

  return (
    <div className="flex justify-center items-center my-16">
      <div className="bg-white rounded-xl overflow-hidden w-3/4 lg:flex lg:shadow-lg">
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src={originalImageURL ? originalImageURL : IMG_URL}
            alt="poster"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <div className="mb-4">
            <h3 className="text-lg">{language}</h3>
            <h3 className="text-lg">{rating.average ? rating.average : "-"}</h3>
          </div>
          <div className="mb-4">
            <h4 className="text-sm">{days}</h4>
            <h4 className="text-sm">{time}</h4>
          </div>
          <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: summary }} />
          <div className="mt-4">
            <button
              className="bg-red-600 p-2 rounded-lg text-white hover:bg-red-500"
              onClick={handleBookTicket}
            >
              Book Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
