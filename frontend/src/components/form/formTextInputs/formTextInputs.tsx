import React from 'react'
import FormInput from '@/components/form/formInput/formInput'
import FormTextarea from '@/components/form/formTextarea/formTextarea'
import { TProjectData } from '@/utils/type'
import FormSelect from '../formSelect/formSelect'

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
      <FormSelect
        id={'category'}
        name={'category'}
        onChange={dataEntry}
        value={projectData.category}
        title={'Категория проекта'}
      />
      <FormInput
        id={'name'}
        name={'name'}
        onChange={dataEntry}
        value={projectData.name}
        title={'Наименование'}
        customValidity={customValidity}
      />

      <FormInput
        id={'price'}
        name={'price'}
        onChange={dataEntry}
        value={projectData.price}
        title={'Стоимость'}
        customValidity={customValidity}
      />
      <FormInput
        id={'deadline'}
        name={'deadline'}
        onChange={dataEntry}
        value={projectData.deadline}
        title={'Срок выполнения'}
        customValidity={customValidity}
      />
      <FormInput
        id={'complexity'}
        name={'complexity'}
        onChange={dataEntry}
        value={projectData.complexity}
        title={'Сложность'}
        customValidity={customValidity}
      />

      <FormTextarea
        id={'description'}
        name={'description'}
        onChange={dataEntry}
        value={projectData.description}
        title={'Описание'}
        customValidity={customValidity}
      />
    </>
  )
}
