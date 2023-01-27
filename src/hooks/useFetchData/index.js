import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [products, setProducts] = useState([]);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reqError, setReqError] = useState("");

  const httpConfig = (data, method) => {
    if (method === "POST" || method === "DELETE" || method === "PUT") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setReqError("");
      setLoading(true);

      try {
        const res = await fetch(url);
        const data = await res.json();

        setProducts(data);
        setLoading(false);
      } catch (error) {
        setReqError("Error, try later!");
      }

      setLoading(false);
    }
    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST" || method === "DELETE" || method === "PUT") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { products, setProducts, loading, reqError, httpConfig };
};

export default useFetchData;
