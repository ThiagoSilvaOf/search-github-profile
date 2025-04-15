import React from "react";

const useFetch = (url) => {
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        setUserData(null);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }
        
        const result = await response.json();
        setUserData(result);
      } catch (err) {
        setUserData(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { userData, loading, error };
};

export default useFetch;