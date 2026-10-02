import Form from '@/components/Form'
import type { FormEvent, ReactElement } from 'react'

export default function Register({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
}): ReactElement {
  return (
    <Form
      IspasswordExists={true}
      isRegisterForm={true}
      onSubmit={handleSubmit}
    />
  )
}
