import { useEffect, useState } from 'react';
import { getDatabase, ref, query, get, orderByKey } from 'firebase/database';

const useQuestions = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const db = getDatabase();
    const quizRef = ref(db, 'quiz/' + videoID + '/questions');
    const quizQuery = query(quizRef, orderByKey());

    try {
      setLoading(true);
      setError(false);
      //   request for firebase database

      const snapshot = await get(quizQuery);
      setLoading(false);

      if (snapshot.exists()) {
        setQuestions((prevState) => {
          return [...prevState, ...Object.values(snapshot.val())];
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('Failed to fetch');
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
};

export default useQuestions;
