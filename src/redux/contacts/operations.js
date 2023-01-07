import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// // GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      toast.error('Something went wrong.. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// // POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', credentials);
      toast.success('Contact has been added successfully');
      return res.data;
    } catch (e) {
      toast.error('Something went wrong.. Try again.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// // DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (e) {
      toast.error('Something went wrong.. Try again.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
