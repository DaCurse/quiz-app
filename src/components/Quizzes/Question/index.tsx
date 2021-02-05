import { FormControlLabel, Radio } from '@material-ui/core';
import React from 'react';
import FormikRadioGroup from '../../Formik/FormikRadioGroup';

export interface QuestionProps {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answers }) => {
  const answersToRender = answers.map((answer) => {
    return (
      <FormControlLabel
        key={answer}
        value={answer}
        control={<Radio />}
        label={answer}
      />
    );
  });

  return (
    <div>
      <h4>{question}</h4>
      <FormikRadioGroup name={question}>{answersToRender}</FormikRadioGroup>
    </div>
  );
};

export default Question;
