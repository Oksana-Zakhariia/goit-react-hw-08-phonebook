import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { List } from './ContactList.styled';
import { SearchBox } from 'components/SearchBox/Searchbox';
const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      <SearchBox></SearchBox>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </List>
  );
};
