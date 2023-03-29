// import { Field, Formik } from 'formik';
// import { useDispatch } from 'react-redux';
// import { Form } from 'react-router-dom';
// import { editeContact } from 'redux/contacts/operations';

export const EditingForm = ({ contact }) => {
  // const dispatch = useDispatch();
  // const handleChangeContact = () => dispatch(editeContact(contact.id));
  // const { id, number, name } = data;

  // const handleChangeContact = (event, actions) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const name = form.elements.name.value;
  //   const number = form.elements.number.value;
  //   console.log(name);
  //   console.log(number);
  //   dispatch(editeContact(id));
  //   actions.resetForm();
  // };
  return (
    <form>
      <input name="name" type="text"></input>
      <input name="number" type="text"></input>
      {/* <button type="submit" onSubmit={handleChangeContact}>
        Save changes
      </button> */}
    </form>
    // <Formik
    //   initialValues={{ name: name, number: number }}
    //   onSubmit={handleChangeContact}
    // >
    //   <Form>
    //     <Field name="name" type="text"></Field>
    //     <Field name="number" type="text"></Field>
    //   </Form>
    //   <button type="submit">submit</button>
    // </Formik>
  );
};
