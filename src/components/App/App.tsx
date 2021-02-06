import React from 'react';
import { QuestionProps } from '../Quizzes/Question/Question';
import Quiz from '../Quizzes/Quiz/Quiz';
import styles from './App.module.css';

const App: React.FC = () => {
  const questions: QuestionProps[] = [
    {
      question: 'Whats 1+1?',
      answers: ['2', '3', 'Cat', '-1'],
      correctAnswer: '2',
    },
    {
      question: 'Foo',
      answers: ['Bar', 'Baz', 'Qux', 'Another'],
      correctAnswer: 'Bar',
    },
  ];
  return (
    <div className={styles.App}>
      <h1>Cool Quiz App</h1>
      <Quiz name="A Cool Quiz" questions={questions} />
    </div>
  );
};

export default App;
