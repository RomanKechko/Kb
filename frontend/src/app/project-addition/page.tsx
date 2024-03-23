import Auth from '@/components/auth/auth'
import ProjectAddition from '@/components/projectAddition/projectAddition'

export default function ProjectAdditionPage () {
  return (
    <Auth redirectUrl='/control'>
      <ProjectAddition/>
    </Auth>
  )
}
