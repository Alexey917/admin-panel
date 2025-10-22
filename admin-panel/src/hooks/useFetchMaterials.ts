import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchMaterials = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [materials, setMaterials] = useState();
  const [error, setError] = useState<string>('');

  const fetchMaterials = async () => {
    try {
      const response = await axios.get('url/api/materials', {
        headers: {
          // Authorization: `Bearer ${token}`
        },
      });
      if (response.status === 200) {
        setMaterials(response.data);
        console.log(response.data);
      }
    } catch (e) {
      setError('Failed to fetch materials');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  return { materials, loading, error };
};
