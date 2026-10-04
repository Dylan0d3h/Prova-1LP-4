import { linkWhatsApp } from '../utils/formatadores'
import IconeWhatsApp from './IconeWhatsApp'

export default function BotaoWhatsAppFlutuante() {
  return (
    <a
      className="whatsapp-flutuante"
      href={linkWhatsApp('Olá! Vim pelo app da AirSul e gostaria de atendimento.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento pelo WhatsApp"
      title="Atendimento pelo WhatsApp"
    >
      <IconeWhatsApp tamanho={30} />
    </a>
  )
}
