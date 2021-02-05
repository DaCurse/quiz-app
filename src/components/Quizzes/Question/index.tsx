import { FormControlLabel, Radio } from '@material-ui/core';
import React from 'react';
import FormikRadioGroup from '../../Formik/FormikRadioGroup';

export interface QuestionProps {
  question: string;
  options: string[];
  correctOption: string;
}

const Question: React.FC<QuestionProps> = ({ question, options }) => {
  const optionsToRender = options.map((option) => {
    return (
      <FormControlLabel
        key={option}
        value={option}
        control={<Radio />}
        label={option}
      />
    );
  });

  return (
    <div>
      <h4>{question}</h4>
      <FormikRadioGroup name={question}>{optionsToRender}</FormikRadioGroup>
    </div>
  );
};

export default Question;
