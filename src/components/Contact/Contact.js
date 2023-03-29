// import { EditingForm } from 'components/EditingForm/EditingForm';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getIsEdited } from 'redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { ContactButton, ContactItem, NameField } from './Contact.styled';

export const Contact = ({ contact }) => {
  // const isEdited = useSelector(getIsEdited);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  // const handleEdite = () => {
  //   console.log(isEdited);
  // };
  return (
    <>
      <ContactItem id={contact.id}>
        <NameField>
          <span>{contact.name} </span>
          <span>{contact.number}</span>
        </NameField>{' '}
        {/* {!isEdited && <EditingForm />} */}
        <ContactButton onClick={handleDelete}>Delete</ContactButton>
        {/* <ContactButton onClick={handleEdite}>Edite</ContactButton> */}
      </ContactItem>
    </>
  );
};
