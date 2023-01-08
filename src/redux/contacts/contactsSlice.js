import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContacts,
} from './contactOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [updateContacts.pending]: handlePending,

    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [updateContacts.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      console.log('state on add', state);
      console.log('action on add', action);

      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      // console.log('state on delete', state);
      // console.log('action on delete', action);

      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.isLoading = false;
      state.error = null;
    },

    // [deleteContact.fulfilled](state, action) {
    //   console.log('state on delete', state);
    //   console.log('action on delete', action);

    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     item => item.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
    [updateContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items[index] = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
