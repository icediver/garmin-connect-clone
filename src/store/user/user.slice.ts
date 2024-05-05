import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISocialProfile } from 'garmin-connect/dist/garmin/types';

const initialState: ISocialProfile = {} as ISocialProfile;

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<ISocialProfile>) => {
			const isExist = state.items.some(
				(item) => item.course.id === action.payload.course.id
			);

			if (!isExist)
				state.items.push({ ...action.payload, id: state.items.length });
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter((item) => item.id !== action.payload.id);
		},

		reset: (state) => {
			state.items = [];
		},
	},
});
