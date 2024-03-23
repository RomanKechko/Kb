import Auth from '@/components/auth/auth'
import Login from '@/components/login/login'
import { FC } from 'react'

export default function ProjectPage () {
  return (
    <Auth redirectUrl='/project-addition' isAuthPage={true}>
      <Login/>
    </Auth>
  )
};
