import { useAppSelector } from '@/services/hooks'
import { IData } from '@/utils/interface'
import Product from './product/product'

export default function ProductComponent () {
  const data: IData[] = useAppSelector(
    state => state.projects?.projectsData as IData[]
  )
  const projectСategory = useAppSelector(
    state => state.projects.projectСategory
  )
  return (
    <>
      {data.map(
        (project: IData, index: number) =>
          (project.category === projectСategory ||
            projectСategory === 'all') && (
            <Product project={project} index={index} key={project._id} />
          )
      )}
    </>
  )
}
