import styles from './page.module.css'
import MainLeftComponent from '@/components/mainLeft/mainLeft'
import MainRightComponent from '@/components/mainRight/mainRight'

export default function Home () {
  return (
    <>
      <main className={styles.main}>
        <MainLeftComponent />
        <MainRightComponent />
      </main>
    </>
  )
}
