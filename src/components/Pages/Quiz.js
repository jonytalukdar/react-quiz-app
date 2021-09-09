import React, { useState, useReducer, useEffect, useContext } from 'react';
import Answers from '../Answers/Answers';
import ProgressBar from '../ProgressBar/ProgressBar';
import MiniPlayer from '../MiniPlayer/MiniPlayer';
import useQuestions from '../../Hooks/useQuestions';
import { useHistory, useParams } from 'react-router';
import _ from 'lodash';
import { AuthContext } from '../../contexts/AuthContext';
import { getDatabase, ref, set } from '@firebase/database';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case 'answer':
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.questionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'questions', value: questions });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: 'answer',
      questionID: currentQuestion,
      questionIndex: index,
      value: e.target.checked,
    });
  };

  // next button for change question
  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevState) => prevState + 1);
    }
  };

  // prev button for change question
  const prevQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevState) => prevState - 1);
    }
  };

  // submit quiz
  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    history.push({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }

  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h3>There was an error!</h3>}
      {!loading && !error && qna && qna.length > 0 && (
        <div>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            submit={submit}
            next={nextQuestion}
            prev={prevQuestion}
            progress={percentage}
          />
          <MiniPlayer />
        </div>
      )}
    </>
  );
};

export default Quiz;
