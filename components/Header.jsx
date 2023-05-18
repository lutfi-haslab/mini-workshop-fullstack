import React from 'react'
import Link from 'next/link'

export default function Header({ name, title, date, url }) {
  return (
    <header>
      <div>
        <a href={url}>
          <span>{name}</span>
        </a>{' '}
        —{' '}
        <Link href="/">
          <a>{title}</a>
        </Link>
      </div>
      <div className='flex items-center space-x-2'>
      <Link href="/">
          <button className='bg-blue-500 py-1 px-2 rounded-sm text-black hover:bg-blue-900 hover:text-white'>Back Home</button>
        </Link>
      <time>{date}</time>
      </div>
    </header>
  )
}
