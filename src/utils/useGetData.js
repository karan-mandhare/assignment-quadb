import  { useState, useEffect } from "react";
import { API_URL } from "../constants/constant";

const useGetData = () => {
  const [shows, setShows] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setShows(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return shows;
};

export default useGetData;
