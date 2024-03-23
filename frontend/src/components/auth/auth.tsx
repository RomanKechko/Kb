'use client'
import { useAppSelector } from '@/services/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface IAuthProps {
  children: any;
  redirectUrl?: string;
  isAuthPage?: boolean;
}

export default function Auth ({
  children,
  redirectUrl,
  isAuthPage = false
}: IAuthProps) {
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
          width: '100%',
          height: '100% - 80px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex'
        }}
      >
        loading...
      </h2>
    )
  }

  return children
};
