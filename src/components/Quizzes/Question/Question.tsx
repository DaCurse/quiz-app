import { FormControlLabel, Radio } from '@material-ui/core';
import React from 'react';
import FormikRadioGroup from '../../Formik/FormikRadioGroup/FormikRadioGroup';
import styles from './Question.module.css';

export interface QuestionProps {
  text: string;
  answers: string[];
  correctAnswer: string;
}

function Question({ text, answers }: QuestionProps): JSX.Element {
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
    <div className={styles.Question}>
      <h4>{text}</h4>
      <FormikRadioGroup name={text}>{answersToRender}</FormikRadioGroup>
    </div>
  );
}

export default Question;
