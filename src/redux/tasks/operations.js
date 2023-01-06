import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// // GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// // POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { credentials });
      // Notify.success('Contact added');
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// // DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
