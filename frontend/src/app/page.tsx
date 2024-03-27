import styles from './page.module.css'
import MainLeft from '@/components/mainLeft/mainLeft'
import MainRight from '@/components/mainRight/mainRight'

export default function Home () {
  return (
    <>
      <main className={styles.main}>
        <MainLeft />
        <MainRight />
      </main>
    </>
  )
}
