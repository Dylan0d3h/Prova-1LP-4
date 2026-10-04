import { WHATSAPP_VENDEDOR } from '../config'

export function formatarPreco(valor: number): string {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
export function formatarBtus(btus: number): string {
  return `${btus.toLocaleString('pt-BR')} BTUs`
}
export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_VENDEDOR}?text=${encodeURIComponent(mensagem)}`
}
