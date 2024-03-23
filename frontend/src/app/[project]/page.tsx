import style from './page.module.css'
import ProjectComponent from '@/components/project/project'

export default function () {
  return (
    <>
      <main className={style.container}>
        <ProjectComponent/>
      </main>
    </>
  )
};
