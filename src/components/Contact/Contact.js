import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ContactButton, ContactItem, NameField } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactItem id={contact.id}>
      <NameField>
        <span>{contact.name} </span>
        <span>{contact.number}</span>
      </NameField>
      <ContactButton onClick={handleDelete}>Delete</ContactButton>
    </ContactItem>
  );
};
