'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? 'glass backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between py-3">
        {/* لوگو */}
        <Link href="/" className="text-xl font-bold holo">
          سیاست‌نما
        </Link>

        {/* منوی دسکتاپ */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <Link className="link-underline" href="#features">
              ویژگی‌ها
            </Link>
          </li>
          <li>
            <Link className="link-underline" href="#articles">
              تحلیل‌ها
            </Link>
          </li>
          <li>
            <Link className="link-underline" href="#about">
              درباره
            </Link>
          </li>
        </ul>

        {/* منوی موبایل */}
        <button className="md:hidden glass px-3 py-2 rounded-lg">منو</button>
      </nav>
    </header>
  )
}
