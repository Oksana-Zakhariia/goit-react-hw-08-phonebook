import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchBox } from 'components/SearchBox/Searchbox';

export default function Contacts() {
  return (
    <div>
      <h1>Here you can add or remote your contacts</h1>

      <ContactForm></ContactForm>
      <SearchBox></SearchBox>
      <ContactList />
    </div>
  );
}
