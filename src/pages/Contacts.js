import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchBox } from 'components/SearchBox/Searchbox';

export default function Contacts() {
  return (
    <div>
      Contacts
      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      <ContactList />
    </div>
  );
}
