import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@state/store'

export default function Dashboard() {
  const initialUserState = useSelector((state: RootState) => state.user)

  return (
    <div>
      Dashboard
      <div>
        username: {initialUserState.username} <br />
        password: {initialUserState.password}
      </div>
    </div>
  )
}