import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './thunk';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, ({ contacts }) => {
        contacts.isLoading = true;
        contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, ({ contacts }, { error }) => {
        contacts.isLoading = false;
        contacts.error = error.message;
      })
      .addCase(addContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = contacts.items.filter(item => item.id !== payload.id);
      });
  },
});

export const contactsReducer = contactSlice.reducer;
export const { updateFilter } = contactSlice.actions;
