import style from './mainLeft.module.css'
import Link from 'next/link'

export default function MainLeft () {
  return (
    <section className={style.section}>
      <h1 className={style.title}>Выполняем работы по ТЗ</h1>
      <Link
        href='/files/Word.docx'
        aria-disabled='true'
        className={style.link}
        download
      >
        Скачать бланк договора
      </Link>
      <p className={style.text}>
        В нашем коллективе работают 2 Главных Конструктора и 2 Ведущих
        Конструктора.
      </p>
      <p className={style.text}>
        Основная специализация всех сотрудников – это машиностроение и
        металлоконструкции. С выполненными за последние годы проектами можно
        ознакомиться в Библиотеке проектов.
      </p>
    </section>
  )
};
