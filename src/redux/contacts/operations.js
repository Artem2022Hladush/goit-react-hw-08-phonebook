import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/contacts")
			return response.data
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message)
		}
	}
);

export const addContacts = createAsyncThunk(
	"contacts/addContacts",
	async (data , thunkAPI) => {
		try {
			const response = await axios.post("/contacts", data);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteContacts = createAsyncThunk(
	"tasks/deleteTask",
	async (contactsId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactsId}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);