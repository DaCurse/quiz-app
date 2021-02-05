import React from 'react';
import { QuestionProps } from '../Quizzes/Question';
import Quiz from '../Quizzes/Quiz';
import styles from './App.module.css';

const App: React.FC = () => {
  const questions: QuestionProps[] = [
    {
      question: 'Whats 1+1?',
      options: ['2', '3', 'Cat', '-1'],
      correctOption: '2',
    },
    {
      question: 'Foo',
      options: ['Bar', 'Baz', 'Qux', 'Another'],
      correctOption: 'Bar',
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
