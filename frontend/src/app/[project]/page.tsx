import style from './page.module.css'
import Project from '@/components/project/project'

export default function () {
  return (
    <>
      <main className={style.container}>
        <Project/>
      </main>
    </>
  )
};
