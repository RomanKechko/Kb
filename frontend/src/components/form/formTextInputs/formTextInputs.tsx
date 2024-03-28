import React from 'react'
import FormInput from '@/components/form/formInput/formInput'
import FormTextarea from '@/components/form/formTextarea/formTextarea'
import { TProjectData } from '@/utils/type'
import FormSelect from '../formSelect/formSelect'
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
      {arrayFormTextInput.map((item, index) =>
        item.id === 'category' ? (
          <FormSelect
            key={index}
            id={item.id}
            name={item.name}
            onChange={dataEntry}
            value={projectData[item.name] as string}
            title={item.title}
          />
        ) : item.id === 'description' ? (
          <FormTextarea
            key={index}
            id={item.id}
            name={item.name}
            onChange={dataEntry}
            value={projectData[item.name] as string}
            title={item.title}
            customValidity={customValidity}
          />
        ) : (
          <FormInput
            key={index}
            id={item.id}
            name={item.name}
            onChange={dataEntry}
            value={projectData[item.name] as string}
            title={item.title}
            customValidity={customValidity}
          />
        )
      )}
    </>
  )
}
