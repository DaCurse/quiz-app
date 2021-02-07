import { Button } from '@material-ui/core';
import { Form, Formik, FormikValues } from 'formik';
import React, { useState } from 'react';
import Question, { QuestionProps } from '../Question/Question';
import styles from './Quiz.module.css';

export interface QuizProps {
  name: string;
  questions: QuestionProps[];
}

const Quiz = ({ name, questions }: QuizProps): JSX.Element => {
  const [correct, setCorrect] = useState(false);

  function handleSubmit(values: FormikValues) {
    const isCorrect = questions.every(
      (q) => values[q.text] === q.correctAnswer
    );
    setCorrect(isCorrect);
  }

  const questionsToRender = questions.map((question) => (
    <Question key={question.text} {...question} />
  ));

  return (
    <div className={styles.Quiz}>
      <h3>{name}</h3>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            {questionsToRender}
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{correct.toString()}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Quiz;
