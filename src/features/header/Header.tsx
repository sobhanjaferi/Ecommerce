import { type ReactElement } from 'react'
import Navbar from './Navbar'

export default function Header(): ReactElement {
  return (
    <header className='mb-10'>
      <Navbar />
    </header>
  )
}
