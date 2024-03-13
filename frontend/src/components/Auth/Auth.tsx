'use client'
import { useAppSelector } from '@/services/hooks'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

interface IAuthProps {
  children: any;
  redirectUrl?: string;
  isAuthPage?: boolean;
}

const Auth: FC<IAuthProps> = ({
  children,
  redirectUrl,
  isAuthPage = false,
}) => {
  const auth = useAppSelector((state) => state.user.isAuth)
  const router = useRouter()

  useEffect(() => {
    if (isAuthPage === auth) {
      router.push(redirectUrl!)
    }
  }, [auth])

  if (isAuthPage === auth) {
    return (
      <h2
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flex: 1,
        }}
      >
        loading...
      </h2>
    )
  }

  return children
}
export default Auth
