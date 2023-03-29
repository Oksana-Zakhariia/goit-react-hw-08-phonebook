import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  deleteContact,
  editeContact,
} from './operations';
const extraExtions = [addContact, fetchContacts, deleteContact, editeContact];
const getActions = type => extraExtions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isEdited: false,
  },
  extraReducers: builder => {
    return builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(editeContact.pending, state => {
        state.isLoading = true;
        state.isEdited = true;
      })
      .addCase(editeContact.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isEdited = true;
        state.error = null;
        console.log(action.payload);
        state.items = state.items.reduce((acc, item) => {
          if (item.id === action.payload.id) {
            return [...acc, action.payload];
          }
          return [
            ...acc,
            { id: item.id, name: item.name, number: item.number },
          ];
        }, []);
      })
      .addCase(editeContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isEdited = false;
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
        state.isEdited = false;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isEdited = false;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
