'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot = document.createElement('div')
    const ring = document.createElement('div')
    dot.className = 'cursor-dot'
    ring.className = 'cursor-ring'
    document.body.append(dot, ring)

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y

    const move = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate(${x - 3}px, ${y - 3}px)`
    }

    const loop = () => {
      rx += (x - rx) * 0.2
      ry += (y - ry) * 0.2
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      requestAnimationFrame(loop)
    }

    const onDown = () => {
      ring.style.transform += ' scale(0.85)'
    }

    const onUp = () => {
      ring.style.transform = ring.style.transform.replace(' scale(0.85)', '')
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    loop()

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      dot.remove()
      ring.remove()
    }
  }, [])

  return null
}
