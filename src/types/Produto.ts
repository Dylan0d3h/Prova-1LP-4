
export type TipoAparelho = 'Split Hi-Wall' | 'Janela' | 'Portátil' | 'Piso-Teto' | 'Cassete'

export interface Produto {
  id: string
  nome: string
  marca: string
  tipo: TipoAparelho
  btus: number
  inverter: boolean
  preco: number
  precoAntigo?: number
  imagem: string
  descricaoCurta: string
  descricaoCompleta: string
  especificacoes: Record<string, string>
  destaques: string[]
}
