import { useState, useEffect } from "react";

interface FetchDataResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useFetchData = (url: string, triggerFetch: boolean) => {
  const [data, setData] = useState<FetchDataResponse[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${url}?_limit=${10}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = (await response.json()) as FetchDataResponse[];
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (triggerFetch) {
      fetchData();
    }
  }, [url, triggerFetch]);

  return { data, isLoading, error };
};

export default useFetchData;
