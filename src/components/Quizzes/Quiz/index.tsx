import { Button } from '@material-ui/core';
import { Form, Formik, FormikValues } from 'formik';
import React, { useState } from 'react';
import Question, { QuestionProps } from '../Question';

export interface QuizProps {
  name: string;
  questions: QuestionProps[];
}

const Quiz: React.FC<QuizProps> = ({ name, questions }) => {
  const [correct, setCorrect] = useState(false);

  function handleSubmit(values: FormikValues) {
    const isCorrect = Object.keys(values).every((key) =>
      questions.some((q) => q.correctAnswer === values[key])
    );
    setCorrect(isCorrect);
  }

  const questionsToRender = questions.map((question) => (
    <Question key={question.question} {...question} />
  ));

  return (
    <div>
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
