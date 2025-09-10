'use client'
import { useEffect, useState } from 'react'
import cn from 'classnames'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initial = saved ?? prefers
    setTheme(initial)
    document.documentElement.classList.toggle('light', initial === 'light')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
    // سینک رنگ ذرات و آیکن‌ها با تم
    document.documentElement.style.setProperty(
      '--particle-color',
      theme === 'light' ? '#0ea5e9' : '#22d3ee'
    )
  }, [theme])

  return (
    <div className={cn(theme === 'light' ? 'light' : '')}>
      <button
        aria-label="تغییر حالت روز/شب"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="fixed left-4 top-4 z-50 glass px-3 py-2 rounded-xl text-sm hover:scale-105 transition focus-ring"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      {children}
    </div>
  )
}
