export interface UserState {
	id: number
	username: string
	password: string
	role: string
}

export const initialState: UserState = {
	id: 0,
	username: '',
	password: '',
	role: '',
}