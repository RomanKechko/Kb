import style from './formSelect.module.css'

interface IFormSelectProps {
  title: string
  id: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}
export default function FormSelect ({
  title,
  id,
  name,
  value,

  onChange
}: IFormSelectProps) {
  return (
    <li className={style.form__item}>
      <label htmlFor={id} className={style.form_label}>
        {title}:
      </label>

      <select
        name={name}
        id={id}
        className={style.form_select}
        value={value}
        onChange={onChange}
      >
        <option value='ordinary'>Крупное</option>
        <option value='maf'>МАФ</option>
      </select>
    </li>
  )
}
