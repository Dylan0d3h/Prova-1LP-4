import { useOnline } from '../hooks/useOnline'

export default function AvisoOffline() {
  const online = useOnline()
  if (online) return null

  return (
    <div className="aviso-offline" role="status">
      Você está offline — o catálogo continua funcionando normalmente.
    </div>
  )
}
