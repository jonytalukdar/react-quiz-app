import { useEffect, useState } from 'react';
import {
  getDatabase,
  ref,
  query,
  get,
  orderByKey,
  startAt,
  limitToFirst,
} from 'firebase/database';

const useVideosList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchVideos = async () => {
    const db = getDatabase();
    const videosRef = ref(db, 'videos');
    const videoQuery = query(
      videosRef,
      orderByKey(),
      startAt('' + page),
      limitToFirst(8)
    );

    try {
      setLoading(true);
      setError(false);
      //   request for firebase database

      const snapshot = await get(videoQuery);
      setLoading(false);

      if (snapshot.exists()) {
        setVideos((prevState) => {
          return [...prevState, ...Object.values(snapshot.val())];
        });
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('Failed to fetch');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchVideos();
    }, 2000);
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
};

export default useVideosList;
