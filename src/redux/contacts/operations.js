import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";

axios.defaults.baseURL = "https://63c4138ca908563575310e51.mockapi.io"

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
	async ({name, phone, id} , thunkAPI) => {
		try {
			const response = await axios.post("/contacts", { name, phone, id: nanoid() });
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