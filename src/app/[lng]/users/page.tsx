import { getDictionary } from '@/app/[lng]/dictionaries'
import { Users } from '@/app/[lng]/users/Users'
import { type PageProps } from '@/types'

interface Props extends PageProps {}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function UserPage(props: Props) {
  const { params } = props
  const { lng } = params

  const dict = await getDictionary(lng)

  return <Users dict={dict} />
}
