import { FormEvent, type ReactElement } from 'react'
import Form from '@/components/Form'

export default function FormLogin({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}): ReactElement {
  return (
    <Form
      onSubmit={handleSubmit}
      IspasswordExists={true}
      isRegisterForm={false}
    />
  )
}
