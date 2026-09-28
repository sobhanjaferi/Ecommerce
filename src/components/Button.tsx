import type { ComponentProps, ReactElement } from 'react'

type Props = ComponentProps<'button'> & {
  color?: 'gray' | 'transparent' | 'red'
}

export default function Button({
  color = 'transparent',
  children,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={`p-2 rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 active:opacity-30
        ${color === 'gray' && 'bg-gray-700 text-white'}
        ${color === 'transparent' && 'border border-gray-700 text-gray-800'}
        ${color === 'red' && 'bg-red-600 text-white font-bold'}
        ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
