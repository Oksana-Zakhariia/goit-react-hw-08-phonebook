import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';
import { editeContact } from 'redux/contacts/operations';

export const EditingForm = (data, onClose) => {
  const { id, number, name } = data;

  const dispatch = useDispatch();
  const handleChangeContact = (values, actions) => {
    dispatch(editeContact({ id, ...values }));
    onClose();
    actions.resetFporm();
  };
  return (
    <Formik
      initialValues={{ name: name, number: number }}
      onSubmit={handleChangeContact}
    >
      <Form>
        <Field name="name" type="text"></Field>
        <Field name="number" type="text"></Field>
      </Form>
      <button type="submit">submit</button>
    </Formik>
  );
};
