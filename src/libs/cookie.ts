import { cookies } from 'next/headers'

interface Props {
  name: string
  data: string
}

export async function setCookie(props: Props): Promise<void> {
  const cookie = await cookies()

  cookie.set(props.name, props.data)
}
