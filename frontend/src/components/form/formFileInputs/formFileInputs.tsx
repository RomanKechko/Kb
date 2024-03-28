import React from 'react'
import FormFileInput from '@/components/form/formFileInput/formFileInput'
import { TProjectData } from '@/utils/type'
import { arrayFormFileInput } from '@/arraysAndObjects/arrays'
interface IFormFileInputProps {
  setProjectData: React.Dispatch<React.SetStateAction<TProjectData>>
  projectData: TProjectData
}

export default function FormFileInputs ({
  setProjectData,
  projectData
}: IFormFileInputProps) {
  return (
    <>
      {arrayFormFileInput.map(item => (
        <FormFileInput
          title={item.title}
          id={item.id}
          name={item.name}
          accept={item.accept}
          setProjectData={setProjectData}
          projectData={projectData}
        />
      ))}
    </>
  )
}
