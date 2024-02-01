import React from "react";
import { IMG_URL } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const ShowList = ({ show }) => {
  const navigate = useNavigate();

  const { id, image, name, rating, language } = show || {};
  const mediumImageURL = image?.medium;

  const handleClick = () => {
    navigate(`/show/${id}`);
  };

  return (
    <div className="m-4 border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="w-[200px]">
        <img
          src={mediumImageURL ? mediumImageURL : IMG_URL}
          alt="poster"
          className="rounded-lg"
        />
        <div className="p-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex justify-between items-center mt-2">
            <div className="text-sm text-gray-600">{language}</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium flex items-center">
                {rating.average ? (
                  <>
                    {rating.average}
                    <AiFillStar className="ml-1 text-yellow-500" />
                  </>
                ) : (
                  "-"
                )}
              </span>
              <button
                className="text-blue-700 text-sm font-medium hover:text-blue-500 focus:outline-none"
                onClick={handleClick}
              >
                more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowList;
