import style from './mainRight.module.css'
import Product from '@/components/mainRight/product/product'

export default function MainRight () {
  return (
    <section className={style.container}>
      <ul className={style.lists}>
        <Product/>
      </ul>
    </section>
  )
};
