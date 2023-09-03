import { useState, useEffect } from "react";

export interface RequestStatus<T> {
  loading: boolean;
  data: T | null;
  error: any | null;
}

export const useFetchWithStatus = <T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) => {
  const [data, setData] = useState<RequestStatus<T>>({
    loading: true,
    data: null,
    error: false,
  });

  useEffect(() => {
    const fetchResource = async () => {
      const res = await fetch(input, init);
      const data = await res.json();
      setData({ loading: false, data, error: null });
    };

    try {
      fetchResource();
    } catch (e) {
      console.error(e);
      setData({ loading: false, data: null, error: "Something went wrong!" });
    }
  }, []);

  return data;
};
