import React from 'react'
import { TProjectData } from '@/utils/type'
import { arrayFormTextInput } from '@/arraysAndObjects/arrays'

interface IFormFileInputProps {
  projectData: TProjectData
  dataEntry: React.ChangeEventHandler
  customValidity: string
}

export default function FormTextInputs ({
  dataEntry,
  projectData,
  customValidity
}: IFormFileInputProps) {
  return (
    <>
      {arrayFormTextInput.map(item =>
        <item.tag
          key={item.id}
          id={item.id}
          name={item.name}
          onChange={dataEntry}
          value={projectData[item.name as keyof TProjectData] as string}
          title={item.title}
          customValidity={customValidity}
        />
      )}
    </>
  )
}
