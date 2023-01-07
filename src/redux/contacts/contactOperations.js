import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error('Something went wrong.. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      toast.success('Contact has been added successfully');
      return data;
    } catch (e) {
      toast.error('Something went wrong.. Try again.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      toast.error('Something went wrong.. Try again.');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateAll',
  async ({id, name, number}, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      toast.error('Something went wrong.. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);