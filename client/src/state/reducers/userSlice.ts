// Reducer => describes how actions transport states into next states
// e.g. action is called, reducer will check which action was called, based on the action it will modify the global state store

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { initialState, UserState } from '@components/Login/model'

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>

export const userSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		setUser: (state: UserState, action: PayloadAction<UserState>) => {
			state.id = action.payload.id
			state.username = action.payload.username
			state.password = action.payload.password
			state.role = action.payload.role
		},
		unsetUser: (state: UserState) => {
			state = initialState
		},
	},
})

// Action creators are generated for each case reducer function
export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer
