'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')
  const full = 'تحلیل جهانی؛ روایت فارسی. شفاف، عمیق، الهام‌بخش'

  useEffect(() => {
    // تایپ تدریجی
    let i = 0
    const id = setInterval(() => {
      setText(full.slice(0, i++))
      if (i > full.length) clearInterval(id)
    }, 35)

    // GSAP استیجرینگ
    const ctx = gsap.context(() => {
      gsap.from('.hero-stagger', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out'
      })
    }, ref)

    return () => {
      clearInterval(id)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={ref} className="section-snap h-screen grid place-items-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black hero-stagger">
          <span className="relative inline-block">
            سیاست‌نما
            <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-pink h-[10%] top-[90%] opacity-60 animate-[sweep_1.5s_ease-out_1s_1]"></span>
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl hero-stagger">
          {text}<span className="inline-block w-4 animate-cursor">|</span>
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 hero-stagger">
          <a href="#articles" className="glass px-5 py-3 rounded-2xl hover:scale-105 transition focus-ring">مرور تحلیل‌ها</a>
          <a href="#features" className="px-5 py-3 rounded-2xl border border-white/20 hover:scale-105 transition focus-ring">ویژگی‌ها</a>
        </div>
      </div>
    </section>
  )
}
