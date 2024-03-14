import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteById, findAll, save } from 'api/ContactsApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await findAll();
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await save(contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await deleteById(id);
    return response.data;
  }
);
