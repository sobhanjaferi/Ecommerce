import type { ComponentProps, ReactElement } from 'react'

type Props = ComponentProps<'button'>

export default function IconButton({
  className,
  children,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={`p-1 cursor-pointer outline-0 transition-all duration-200 hover:-translate-y-1 active:opacity-30 flex justify-center items-center ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
