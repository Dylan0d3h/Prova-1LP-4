import { useEffect, useState } from 'react'

export function useRota(): string {
  const [rota, setRota] = useState(() => window.location.hash.slice(1) || '/')

  useEffect(() => {
    const aoMudar = () => {
      setRota(window.location.hash.slice(1) || '/')
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', aoMudar)
    return () => window.removeEventListener('hashchange', aoMudar)
  }, [])

  return rota
}

export function navegar(caminho: string) {
  window.location.hash = caminho
}
