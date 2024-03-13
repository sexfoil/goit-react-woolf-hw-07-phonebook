import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    createContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactSlice.reducer;
export const { createContact, deleteContact, updateFilter } =
  contactSlice.actions;
