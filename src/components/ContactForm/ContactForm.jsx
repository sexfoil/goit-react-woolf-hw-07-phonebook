import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsItems } from 'store/selector';
import { addContact } from 'store/thunk';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);

  const addNewContact = contact => {
    if (hasContact(contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return false;
    }

    dispatch(addContact(contact));
    return true;
  };

  const hasContact = name => {
    return contacts.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const newContact = {
      name: form.name.value,
      phone: form.number.value,
    };
    const isAdded = addNewContact(newContact);

    if (isAdded) {
      form.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputs}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          // pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          type="tel"
          name="number"
          id="number"
          // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
