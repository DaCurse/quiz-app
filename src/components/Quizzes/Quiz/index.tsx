import { Form, Formik, FormikValues } from 'formik';
import React from 'react';
import Question, { QuestionProps } from '../Question';

export interface QuizProps {
  name: string;
  questions: QuestionProps[];
}

const Quiz: React.FC<QuizProps> = ({ name, questions }) => {
  function handleSubmit(values: FormikValues) {
    console.table(values);
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
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Quiz;
