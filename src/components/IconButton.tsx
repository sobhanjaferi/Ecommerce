import type { ComponentProps, ReactElement } from 'react'

type Props = ComponentProps<'button'>

export default function IconButton({
  className,
  type = 'button',
  children,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      type={type}
      className={`p-1 cursor-pointer outline-0 transition-all duration-200 active:opacity-30 flex justify-center items-center ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
