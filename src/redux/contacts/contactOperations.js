// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // GET @ /contacts
// const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/contacts');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // POST @ /contacts
// const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async credentials => {
//     try {
//       const { data } = await axios.post('/contacts', credentials);
//       // Notify.success('Contact added');

//       return data;
//     } catch (error) {
//       // Notify.failure('Something wrong.. Try again.');
//     }
//   }
//   // async (text, thunkAPI) => {
//   //   try {
//   //     const response = await axios.post('/tasks', { text });
//   //     return response.data;
//   //   } catch (e) {
//   //     return thunkAPI.rejectWithValue(e.message);
//   //   }
//   // }
// );

// // DELETE @ /tasks/:id
// const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
// async id => {
//   try {
//     await axios.delete(`contacts/${id}`);
//     // Notify.success('Contact deleted');

//     return id;
//   } catch (error) {
//     // Notify.failure('Something wrong.. Try again.');
//   }

//   // async (taskId, thunkAPI) => {
//   //   try {
//   //     const response = await axios.delete(`/tasks/${taskId}`);
//   //     return response.data;
//   //   } catch (e) {
//   //     return thunkAPI.rejectWithValue(e.message);
//   //   }

//   }
// );

// const contactsOperation = { fetchContacts, addContact, deleteContact };

// export default contactsOperation;