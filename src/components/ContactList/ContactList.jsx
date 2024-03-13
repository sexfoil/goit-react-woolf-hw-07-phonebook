import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selector';
import { deleteContact } from 'store/slice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    if (!filter.trim()) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const removeContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css['contact-list']}>
      {getFilteredContacts().map(contact => {
        return (
          <li key={contact.id} className={css.contact}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              id={contact.id}
              className={css['btn-delete']}
              type="button"
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
