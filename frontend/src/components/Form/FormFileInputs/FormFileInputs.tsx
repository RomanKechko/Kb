import React from 'react'
import FormFileInput from '@/components/Form/FormFileInput/FormFileInput'

interface IFormFileInputProps {
  handleFileInput: (key: string)=> (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormFileInputs ({
  handleFileInput,
}: IFormFileInputProps) {
  return (
    <>
      <FormFileInput
        title={'Добавить видео'}
        id={'video'}
        name={'video'}
        accept={'.mp4, avi'}
        onChange={handleFileInput('video')}
      />
      <FormFileInput
        title={'Добавить первое изображение'}
        id={'image_1'}
        name={'image_1'}
        accept={'image/*'}
        onChange={handleFileInput('image_1')}
      />
      <FormFileInput
        title={'Добавить второе изображение'}
        id={'image_2'}
        name={'image_2'}
        accept={'image/*'}
        onChange={handleFileInput('image_2')}
      />
      <FormFileInput
        title={'Добавить третье изображение'}
        id={'image_3'}
        name={'image_3'}
        accept={'image/*'}
        onChange={handleFileInput('image_3')}
      />
      <FormFileInput
        title={'Добавить gif'}
        id={'gif'}
        name={'gif'}
        accept={'.gif'}
        onChange={handleFileInput('gif')}
      />
      <FormFileInput
        title={'Добавить картинку гифки'}
        id={'gif-image'}
        name={'gif-image'}
        accept={'image/*'}
        onChange={handleFileInput('gif-image')}
        stopCount={true}
      />
      <FormFileInput
        title={'Добавить pdf'}
        id={'pdf'}
        name={'pdf'}
        accept={'.pdf'}
        onChange={handleFileInput('pdf')}
      />
      <FormFileInput
        title={'Добавить word'}
        id={'word'}
        name={'word'}
        accept={'.doc, .docx'}
        onChange={handleFileInput('word')}
      />
    </>
  )
}