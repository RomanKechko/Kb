import { useAppSelector } from '@/services/hooks'
import { IData } from '@/utils/interface'
import Product from './product/product'

export default function Products () {
  const data: IData[] = useAppSelector(
    state => state.projects.projectsData
  )
  const projectCategory = useAppSelector(
    state => state.projects.projectCategory
  )
  return (
    <>
      {data.map(
        (project: IData, index: number) =>
          (project.category === projectCategory ||
            projectCategory === 'all') && (
            <Product project={project} index={index} key={project.id} />
          )
      )}
    </>
  )
}
