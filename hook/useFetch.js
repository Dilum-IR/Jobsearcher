import axios from "axios";
import { useState, useEffect } from "react";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": "887629b0bemsh023e7df7bce0cb4p14b6c6jsnd8128ec7430b",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const FetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      //   console.log(response.data);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error ");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    FetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
