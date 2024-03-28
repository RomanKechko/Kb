import Auth from '@/components/auth/auth'
import Login from '@/components/login/login'

export default function ProjectPage () {
  return (
    <Auth redirectUrl='/project-addition' isAuthPage={true}>
      <Login />
    </Auth>
  )
}
