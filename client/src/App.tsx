import Dashboard from '@components/Dashboard/Dashboard'
import Login from '@components/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'
import { initialState, UserState } from '@components/Login/model'
import { isEquivalent } from '@utils/utils'

export default function App() {
  const initialUserState = useSelector((state: RootState) => state.user)
  let userState: UserState = {
    id: initialUserState.id,
    username: initialUserState.username,
    password: initialUserState.password,
    role: initialUserState.role
  }

  console.log(initialUserState)
  console.log(initialState)

  if (isEquivalent(userState, initialState)) {
    return <Login />
  }

  return (
    <div className="App flex-row">
      <div className="flex-row">
        <Dashboard />
      </div>
    </div>
  );
}