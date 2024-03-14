import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './thunk';
import { handlePending, handleRejected } from './handler';

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
      .addCase(fetchContacts.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = payload;
      })
      .addCase(addContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, ({ contacts }, { payload }) => {
        contacts.isLoading = false;
        contacts.items = contacts.items.filter(item => item.id !== payload.id);
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const contactsReducer = contactSlice.reducer;
export const { updateFilter } = contactSlice.actions;
