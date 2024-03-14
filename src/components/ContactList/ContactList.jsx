import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems, selectFilter } from 'store/selector';
import { deleteContact, fetchContacts } from 'store/thunk';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
              {contact.name}: {contact.phone}
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
