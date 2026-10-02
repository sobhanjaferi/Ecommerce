import type { ComponentProps, ReactElement } from 'react'

type Props = ComponentProps<'input'> & {
  label: string
  children?: ReactElement
}

export default function FormField({
  label,
  children,
  className = '',
  ...props
}: Props): ReactElement {
  return (
    <li className={`flex flex-col justify-between gap-1 ${className}`}>
      <label htmlFor={props.id}>{label}</label>

      <input
        className={`p-2 rounded-lg bg-gray-100 border border-gray-400 outline-gray-600`}
        {...props}
      />

      {children}
    </li>
  )
}
