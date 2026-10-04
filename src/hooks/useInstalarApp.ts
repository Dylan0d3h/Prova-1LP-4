import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function useInstalarApp() {
  const [evento, setEvento] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const capturar = (e: Event) => {
      e.preventDefault()
      setEvento(e as BeforeInstallPromptEvent)
    }
    const instalado = () => setEvento(null)
    window.addEventListener('beforeinstallprompt', capturar)
    window.addEventListener('appinstalled', instalado)
    return () => {
      window.removeEventListener('beforeinstallprompt', capturar)
      window.removeEventListener('appinstalled', instalado)
    }
  }, [])

  const instalar = async () => {
    if (!evento) return
    await evento.prompt()
    await evento.userChoice
    setEvento(null)
  }

  return { podeInstalar: evento !== null, instalar }
}
