import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { setUser } from '@state/reducers/userSlice'
import { UserState } from './model'

export default function Login() {
  const dispatch = useDispatch(),
    initialUserState = useSelector((state: RootState) => state.user),
    [userState, setUserState] = useState<UserState>(initialUserState),
    [username, setUsername] = useState(initialUserState.username),
    [password, setPassword] = useState(initialUserState.password)

  const login = () => {
    setUserState({
      id: 0,
      username: username,
      password: password,
      role: ""
    })
    dispatch(setUser(userState))
  }

  return (
    <form>
      <label>
        <p>Username</p>
        <input type="text" onChange={(event: any) => setUsername(event.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(event: any) => setPassword(event.target.value)} />
      </label>
      <div>
        <button
          onClick={() => login}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
