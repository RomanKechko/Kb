import FormSelect from '@/components/form/formSelect/formSelect'
import FormTextarea from '@/components/form/formTextarea/formTextarea'
import FormInput from '@/components/form/formInput/formInput'

export const arrayFormFileInput = [
  {
    title: 'Добавить видео',
    id: 'video',
    name: 'video',
    accept: '.mp4'
  },
  {
    title: 'Добавить gif',
    id: 'gif',
    name: 'gif',
    accept: '.gif'
  },
  {
    title: 'Добавить картинку гифки',
    id: 'gif-image',
    name: 'gif-image',
    accept: '.jpeg, .png'
  },
  {
    title: `Добавить основное изображение`,
    id: 'image_1',
    name: 'image_1',
    accept: '.jpeg, .png'
  },
  {
    title: 'Добавить второе изображение',
    id: 'image_2',
    name: 'image_2',
    accept: '.jpeg, .png'
  },
  {
    title: 'Добавить третье изображение',
    id: 'image_3',
    name: 'image_3',
    accept: '.jpeg, .png'
  },
  {
    title: 'Добавить pdf',
    id: 'pdf',
    name: 'pdf',
    accept: '.pdf'
  }
]
export const arrayFormTextInput = [
  {
    id: 'category',
    name: 'category',
    title: 'Категория проекта',
    tag: FormSelect
  },
  {
    id: 'name',
    name: 'name',
    title: 'Наименование',
    tag: FormInput
  },
  {
    id: 'price',
    name: 'price',
    title: 'Стоимость',
    tag: FormInput
  },
  {
    id: 'deadline',
    name: 'deadline',
    title: 'Срок выполнения',
    tag: FormInput
  },
  {
    id: 'complexity',
    name: 'complexity',
    title: 'Сложность',
    tag: FormInput
  },
  {
    id: 'description',
    name: 'description',
    title: 'Описание',
    tag: FormTextarea
  }
]
export const renderOrder = [
  'video',
  'gif',
  'image_1',
  'image_2',
  'image_3',
  'pdf'
]
export const renderOrderWithGifImage = [
  'video',
  'gif',
  'gif-image',
  'image_1',
  'image_2',
  'image_3',
  'pdf'
]
