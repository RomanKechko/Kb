'use client'
import { useAppSelector } from '@/services/hooks'
import style from './urn.module.css'
import { useEffect, useState } from 'react'
import ModalMessage from '@/components/modalMessage/modalMessage'

interface IUrnProps {
  id: number;
}

export default function Urn ({
  id
}: IUrnProps) {
  const [deleteProject, setDeleteProject] = useState(false)
  const auth = useAppSelector((state) => state.user.isAuth)
  const [deletionError, setDeletionError] = useState(false)
  const Error = useAppSelector(
    (state) => state.projectManagement.deletionError
  )

  useEffect(() => {
    setDeletionError(Error && deleteProject)
  }, [deleteProject, Error])

  return (
    auth && (
      <>
        <button
          className={style.urn}
          onClick={() => setDeleteProject(true)}
        ></button>
        {deleteProject && (
          <ModalMessage
            deleteProject={deleteProject}
            id={id}
            setDeleteProject={setDeleteProject}
            deletionError={deletionError}
          />
        )}
      </>
    )
  )
}
