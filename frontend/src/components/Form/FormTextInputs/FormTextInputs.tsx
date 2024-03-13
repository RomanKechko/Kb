import React from 'react'
import FormInput from '@/components/Form/FormInput/FormInput'
import FormTextarea from '@/components/Form/FormTextarea/FormTextarea'
import { TProjectData } from '@/utils/type'

interface IFormFileInputProps {
  projectData: TProjectData
  dataEntry: React.ChangeEventHandler
}

export default function FormTextInputs ({
  dataEntry,
  projectData
}: IFormFileInputProps) {
  return (
    <>
      <FormInput
        id={'name'}
        name={'name'}
        onChange={dataEntry}
        value={projectData.name}
        title={'Наименование'}
      />
      <FormInput
        id={'price'}
        name={'price'}
        onChange={dataEntry}
        value={projectData.price}
        title={'Стоимость'}
      />
      <FormInput
        id={'deadline'}
        name={'deadline'}
        onChange={dataEntry}
        value={projectData.deadline}
        title={'Срок выполнения'}
      />
      <FormInput
        id={'complexity'}
        name={'complexity'}
        onChange={dataEntry}
        value={projectData.complexity}
        title={'Сложность'}
      />
      <FormTextarea
        id={'description'}
        name={'description'}
        onChange={dataEntry}
        value={projectData.description}
        title={'Описание'}
      />
    </>
  )
}