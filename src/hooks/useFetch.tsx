import { useState, useEffect } from "react";

type FetchStatus = "idle" | "fetching" | "error" | "fetched";

function useFetch<T = unknown>(url: string): [T | null, FetchStatus, any] {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>("idle");
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus("fetching");
      try {
        const response = await fetch(url);
        const result: T = await response.json();
        setData(result);
        setStatus("fetched");
      } catch (error) {
        setError(error);
        setStatus("error");
      }
    };

    fetchData();
  }, [url]);

  return [data, status, error];
}
