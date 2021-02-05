import { RadioGroup } from '@material-ui/core';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

const FormikRadioGroup: React.FC<FieldAttributes<{}>> = ({
  children,
  ...props
}) => {
  const [field] = useField({ ...props, type: 'radio' });

  return <RadioGroup {...field}>{children}</RadioGroup>;
};

export default FormikRadioGroup;
