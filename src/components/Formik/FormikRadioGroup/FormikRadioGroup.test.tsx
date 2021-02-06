import { Button, Radio } from '@material-ui/core';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Formik } from 'formik';
import React from 'react';
import FormikRadioGroup from './FormikRadioGroup';

it('submits the form with the selected value', async () => {
  const handleSubmit = jest.fn();
  const initialValues = { test: '' };
  const expectedValues = { test: 'bar' };

  render(
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <FormikRadioGroup name="test">
            <Radio value="foo" />
            <Radio value="bar" />
            <Radio value="baz" />
          </FormikRadioGroup>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );

  userEvent.click(screen.getByDisplayValue('bar'));
  userEvent.click(screen.getByRole('button'));

  await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  expect(handleSubmit).toHaveBeenCalledWith(expectedValues, expect.anything());
});
